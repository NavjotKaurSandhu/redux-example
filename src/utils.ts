const span = document.querySelector('span') as HTMLSpanElement;
const bookList = document.querySelector('.books') as HTMLLIElement;

export function renderBooks(collection) {
  span.innerHTML = collection.length;
  bookList.innerHTML = '';
  for (const item of collection) {
    bookList.innerHTML += `
    	<li>
	      ${item.label}
        <button type="button" data-book='${JSON.stringify(item)}'>
          Delete
        </button>
      </li>
     `;
  }
}
