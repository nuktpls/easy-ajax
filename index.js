const easyAjax = (e, n) => {
  const t = window.origin,
    o = new XMLHttpRequest();
  return (
    (o.responseType = "json"),
    o.open("POST", t + e.ajax_url, !0),
    o.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded; charset=UTF-8"
    ),
    o.send(
      Object.keys(n)
        .map(e => e + "=" + n[e])
        .join("&")
    ),
    o
  );
};
export default easyAjax;
