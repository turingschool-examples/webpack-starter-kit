function loadData(URL) {
  return fetch(URL).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch at loadData");
    }
    return res.json();
  });
}

export default loadData;
