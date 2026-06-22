function BackToTop() {
  return (
    <button
      className="top-btn"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      ↑
    </button>
  );
}

export default BackToTop;