const searchForm = document.querySelector(".searchForm input");
      const addForm = document.querySelector(".addForm");
      const todoList = document.querySelector(".todoList");
      const del = document.querySelector(".delete");

      const generateTemplate = (todo) => {
        let html = ` <li class="list-group-item d-flex justify-content-between">
                    <span>${todo}</span>
                    <i class="fas fa-trash-alt delete "></i>
                </li>`;
        todoList.innerHTML += html;
      };

      addForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let todo = addForm.add.value.trim();
        if (todo.length) {
          addForm.reset();
          generateTemplate(todo);
        }
        // console.log(todo);
      });

      del.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
          e.target.parentElement.remove();
        }
      });

      const filterTodo = (term) => {
        Array.from(todoList.children)
          .filter((todo) => !todo.textContent.toLowerCase().includes(term))
          .forEach((todo) => todo.classList.add("filtered"));
        Array.from(todoList.children)
          .filter((todo) => todo.textContent.toLowerCase().includes(term))
          .forEach((todo) => todo.classList.remove("filtered"));
      };
      searchForm.addEventListener("keyup", (e) => {
        let todo = searchForm.value.toLowerCase().trim();
        filterTodo(todo);
      });