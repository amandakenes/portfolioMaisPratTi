function validationForm() {
  let validationCod = document.forms["register"]["cod"].value;
  let validationTitle = document.forms["register"]["title"].value;
  let validationDirector = document.forms["register"]["director"].value;
  let validationDate = document.forms["register"]["date"].value;
  let validationRadio = document.forms["register"]["radio"].value;

    if (validationCod == "") {
        alert("O código deve ser preenchido");
        return false;
    }
    if (validationTitle == "") {
        alert("O título deve ser preenchido");
        return false;
    }
    if (validationDirector == "") {
        alert("O nome do diretor deve ser preenchido");
        return false;
    }
    if (validationDate == "") {
        alert("A data deve ser preenchida");
        return false;
    }
    if (validationRadio == "") {
        alert("O gênero deve ser preenchido");
        return false;
    }

  alert("A validação ocorreu de forma correta");
}

function insert() {
  let cod = document.forms["register"]["cod"].value;
  let title = document.forms["register"]["title"].value;
  let director = document.forms["register"]["director"].value;
  let date = document.forms["register"]["date"].value;
  let radio = document.forms["register"]["radio"].value;

  // responsavel por pegar nosso elemento, nossa linha, que vai servir para inserirmos ela
  let insert = window.document.getElementById("insertRow");

  // a gnt vai editar o conteudo dentro desse elemento manipulando a nossa variavel insert
  // essa variavel armazena o valor do nosso input, oq o usuario digitou
  insert.innerHTML = `
    <th scope="row">${cod}</th>
    <td>${title}</td>
    <td>${director}</td>
    <td>${date}</td>
    <td>${radio}</td>
    `;
  // crase = template string. pq usamos crase? pq precisamos passar um texto, nossos elementos, nao temos como atrelar direto ao nosso insert um elemento então passaremos como texto e lá irá ler como elemento html mesmo. pra atrelarmos o nosso codigo a nossa variavel precisamos passar como template string para que temos acesso a variavel dentro do nosso texto.
}
