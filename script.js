function searchGoogle() {
 let query = document.getElementById("searchInput").value
 window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query)
}
