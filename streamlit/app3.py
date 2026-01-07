# app.py
import streamlit as st
import requests
import time

st.set_page_config(page_title="Admin Tool", layout="wide")
st.title("🛠️ 내부 운영/관리 툴 (FastAPI 연동)")

base_url = st.text_input("API Base URL", value="http://localhost:8000")

st.subheader("1) 작업 트리거")
col1, col2 = st.columns([1, 2])
with col1:
    user_id = st.text_input("X-User-Id", value="1")
    group_id = st.number_input("group_id", min_value=1, value=1)
with col2:
    payload = {
        "group_id": int(group_id),
        "camera_id": 1,
        "label": "fire",
        "confidence": 0.9,
        "image_key": "a.jpg",
    }
    st.code(payload, language="json")

if st.button("🚀 로그 ingest (POST /api/logs/ingest)"):
    try:
        r = requests.post(
            f"{base_url}/api/logs/ingest",
            json=payload,
            headers={"X-User-Id": user_id},
            timeout=5,
        )
        st.success(f"Status {r.status_code}")
        st.json(r.json() if r.text else {"ok": True})
    except Exception as e:
        st.error(str(e))

st.divider()
st.subheader("2) 최근 로그 조회 (GET /api/logs)")

limit = st.slider("limit", 1, 50, 10)
auto_refresh = st.checkbox("자동 새로고침(2초)", value=False)

def fetch_logs():
    r = requests.get(
        f"{base_url}/api/logs",
        params={"group_id": int(group_id), "limit": int(limit)},
        headers={"X-User-Id": user_id},
        timeout=5,
    )
    r.raise_for_status()
    return r.json()

try:
    data = fetch_logs()
    st.json(data)
except Exception as e:
    st.warning(f"조회 실패: {e}")

if auto_refresh:
    time.sleep(2)
    st.rerun()
