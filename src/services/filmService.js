export async function getAllFilms() {
  try {
    let response = await fetch("http://localhost:8080/api/v1/films")
    if (!response.ok) {
      throw { status: response.status, statusText: response.statusText }
    }

    let data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    let message = error.statusText || "Error al obtener las películas"
    window.alert(message);
  }
}

export async function getFilmById(id) {
  try {
    let response = await fetch(`http://localhost:8080/api/v1/films/${id}`)
    if (!response.ok) {
      throw { status: response.status, statusText: response.statusText }
    }
    let data = await response.json();
    return data;
  } catch (error) {
    let message = error.statusText || "Error al obtener el detalle de la película"
    window.alert(message);
  }
}
