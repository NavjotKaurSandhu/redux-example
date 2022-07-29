import { renderBooks } from "./utils";
import * as fromStore from "./store";

const input = document.querySelector("input") as HTMLInputElement;
const button = document.querySelector("button") as HTMLButtonElement;
const destroy = document.querySelector(".unsubscribe") as HTMLButtonElement;
const bookList = document.querySelector(".books") as HTMLLIElement;

const reducer = {
  books: fromStore.reducer
};

const store = new fromStore.Store(reducer, {});

button.addEventListener(
  "click",
  () => {
    if (!input.value.trim()) return;

    const book = { label: input.value, complete: false };

    store.dispatch(new fromStore.AddBook(book));
    
    input.value = "";
  },
  false
);

const unSubscribe = store.subscribe(state => {
  renderBooks(state.books.data);
});

destroy.addEventListener('click', unSubscribe, false);

bookList.addEventListener("click", function (event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === "button") {
    const bookData = JSON.parse(target.getAttribute('data-book') as any);
    store.dispatch(new fromStore.RemoveBook(bookData));
  }
});

store.subscribe(state => console.log('STATE::: ', state));
