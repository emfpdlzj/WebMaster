# app.py
import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt

st.set_page_config(page_title="CSV Dashboard", layout="wide")
st.title("📊 CSV 대시보드")

uploaded = st.file_uploader("CSV 업로드", type=["csv"])
if not uploaded:
    st.info("CSV를 업로드하면 대시보드가 뜹니다. (예: date, category, value 컬럼)")
    st.stop()

@st.cache_data
def load_df(file):
    return pd.read_csv(file)

df = load_df(uploaded)
st.write("미리보기", df.head())

# 간단한 필터 UI
cols = df.columns.tolist()
date_col = st.selectbox("날짜 컬럼 선택", options=cols)
cat_col = st.selectbox("카테고리 컬럼 선택", options=cols)
val_col = st.selectbox("값 컬럼 선택(숫자)", options=cols)

# 날짜 파싱
df[date_col] = pd.to_datetime(df[date_col], errors="coerce")
df = df.dropna(subset=[date_col])

min_d, max_d = df[date_col].min().date(), df[date_col].max().date()
start, end = st.date_input("기간", value=(min_d, max_d))
if isinstance(start, tuple) or isinstance(end, tuple):
    # streamlit 버전에 따라 튜플로 들어오는 경우 방지
    start, end = start[0], start[1]

cats = sorted(df[cat_col].dropna().astype(str).unique().tolist())
picked = st.multiselect("카테고리", cats, default=cats[: min(5, len(cats))])

f = df[(df[date_col].dt.date >= start) & (df[date_col].dt.date <= end)]
if picked:
    f = f[f[cat_col].astype(str).isin(picked)]

# KPI
c1, c2, c3 = st.columns(3)
c1.metric("행 개수", f"{len(f):,}")
c2.metric("합계", f"{pd.to_numeric(f[val_col], errors='coerce').sum():,.2f}")
c3.metric("평균", f"{pd.to_numeric(f[val_col], errors='coerce').mean():,.2f}")

# 일자별 집계 차트
g = f.copy()
g[val_col] = pd.to_numeric(g[val_col], errors="coerce")
g = g.dropna(subset=[val_col])

daily = g.groupby(g[date_col].dt.date)[val_col].sum()

st.subheader("📈 일자별 합계")
fig = plt.figure()
plt.plot(daily.index, daily.values)
plt.xticks(rotation=45)
st.pyplot(fig)

st.subheader("📋 필터 결과")
st.dataframe(f, use_container_width=True)
