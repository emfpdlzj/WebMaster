# app.py
import streamlit as st
from PIL import Image, ImageFilter

st.set_page_config(page_title="Image Demo", layout="centered")
st.title("🖼️ 이미지 데모 (업로드 → 처리 → 결과)")

img_file = st.file_uploader("이미지 업로드", type=["png", "jpg", "jpeg"])
if not img_file:
    st.info("이미지를 업로드해줘.")
    st.stop()

img = Image.open(img_file).convert("RGB")

threshold = st.slider("강도(데모용)", 0, 10, 4)
processed = img.filter(ImageFilter.FIND_EDGES)
for _ in range(threshold):
    processed = processed.filter(ImageFilter.SHARPEN)

c1, c2 = st.columns(2)
with c1:
    st.subheader("원본")
    st.image(img, use_container_width=True)
with c2:
    st.subheader("처리 결과")
    st.image(processed, use_container_width=True)

st.download_button(
    "결과 이미지 다운로드",
    data=processed.tobytes(),
    file_name="result.raw",
)
st.caption("※ download_button은 보통 PNG로 저장해서 내려주도록 바꾸면 더 좋음(원하면 그 버전도 줄게).")
