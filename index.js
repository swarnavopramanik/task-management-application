const state = {               /* state means that all the task from the list */
    taskList: [],
  };
  
  // DOM - document object
  const taskContents = document.querySelector(".task__contents");
  const taskModal = document.querySelector(".task__modal__body");
  
  const htmlTaskContent = ({ id, title, description, type, url }) => `
    <div class='col-md-6 col-lg-3 mt-3' id=${id} key=${id}>
      <div class='card shadow-sm task__card'>
        <div class='card-header d-flex gap-2 justify-content-end task__card__header'>
          <button type='button' class='btn btn-outline-info mr-2' name=${id} onclick="editTask.apply(this, arguments)">
            <i class='fas fa-pencil-alt' name=${id}></i>
          </button>
          <button type='button' class='btn btn-outline-danger mr-2' name=${id} onclick="deleteTask.apply(this, arguments)">
            <i class='fas fa-trash-alt' name=${id}></i>
          </button>
        </div>
        <div class='card-body'>
          ${
            url
              ? `<img width='100%' height='150px' style="object-fit: contain; object-position: center"  src=${url} alt='card image cap' class='card-image-top md-3 rounded-lg' />`
              : `
        <img width='100%' height='150px' style="object-fit: cover; object-position: center" src="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png" alt='card image cap' class='img-fluid place__holder__image mb-3' />
        `
          }
          <h4 class='task__card__title'>${title}</h4>
          <p class='description trim-3-lines text-muted' data-gram_editor='false'>
            ${description}
          </p>
          <div class='tags text-white d-flex flex-wrap'>
            <span class='badge bg-primary m-1'>${type}</span>
          </div>
        </div>
        <div class='card-footer'>
          <button 
          type='button' 
          class='btn btn-outline-primary float-right' 
          data-bs-toggle='modal'
          data-bs-target='#showTask'
          id=${id}
          onclick='openTask.apply(this, arguments)'
          >
            Open Task
          </button>
        </div>
      </div>
    </div>
  `;
  
  const htmlModalContent = ({ id, title, description, url }) => {
    const date = new Date(parseInt(id));
    return `
      <div id=${id}>
      ${
        url
          ? `
          <img width='100%' src=${url} alt='card image cap' class='img-fluid place__holder__image mb-3' />
        `
          : `
        <img width='100%' src="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png" alt='card image cap' class='img-fluid place__holder__image mb-3' />
        `
      }
      <strong class='text-sm text-muted'>Created on ${date.toDateString()}</strong>
      <h2 class='my-3'>${title}</h2>
      <p class='lead'>
        ${description}
      </p>
      </div>
    `;
  };
  
  const updateLocalStorage = () => {
    localStorage.setItem(
      "tasks",
      JSON.stringify({
        tasks: state.taskList, /* json means java script object notetion */
      })
    );
  };
  
  const loadInitialData = () => {
    const localStorageCopy = JSON.parse(localStorage.tasks);
  
    if (localStorageCopy) state.taskList = localStorageCopy.tasks;
  
    state.taskList.map((cardDate) => {
      taskContents.insertAdjacentHTML("beforeend", htmlTaskContent(cardDate));
    });
  };
  
  const handleSubmit = (event) => {
    const id = `${Date.now()}`; /* when submit new data genarate a new current id */
    const input = {
      url: document.getElementById("imageUrl").value,
      title: document.getElementById("taskTitle").value,
      description: document.getElementById("taskDescription").value,
      type: document.getElementById("tags").value,
    };
    function isImgUrl(url) {
      const img = new Image();
      img.src = url;
      return new Promise((resolve) => {
        img.onerror = () => resolve(false);
        img.onload = () => resolve(true);
      });
    }
    
    const urls = [
      'https://avatars.githubusercontent.com/u/33640448?v=4',
      'https://httpbin.org/image/webp',
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/June_odd-eyed-cat.jpg'
    ];
    
    Promise.all(urls.map((url) => isImgUrl(url))).then(console.log);
  
    if (input.title === "" || input.description === "" || input.type === "") {
      return alert("Please fill all the fields");
    }
  
    taskContents.insertAdjacentHTML(
      "beforeend",
      htmlTaskContent({
        ...input,
        id,
      })
    );
  
    state.taskList.push({ ...input, id });
    updateLocalStorage(); /* add new eliment this time use push function */
  };
  
  const openTask = (e) => {
    if (!e) e = window.event; /* e stands for event */
  
    const getTask = state.taskList.find(({ id }) => id === e.target.id);
    taskModal.innerHTML = htmlModalContent(getTask);
  };
  
  const deleteTask = (e) => {
    if (!e) e = window.event;
    const targetID = e.target.getAttribute("name");
    const type = e.target.tagName;
    const removeTask = state.taskList.filter(({ id }) => id !== targetID);  /* filter means flitaring out certain element from array I can delete remove multiple element from this array */
    state.taskList = removeTask;
  
    updateLocalStorage();
    if (type === "BUTTON") {
      return e.target.parentNode.parentNode.parentNode.parentNode.removeChild(
        e.target.parentNode.parentNode.parentNode /* from the buttom tag line 16 js move to upward again and again because whole the button card task element delete thats why using parentNode function basically means that whole task deleter aftert click the delte option thats it */
      );
    }
  
    return e.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(
      e.target.parentNode.parentNode.parentNode.parentNode
    );
  };
  
  const editTask = (e) => {
    if (!e) e = window.event;
  
    const targetID = e.target.id;
    const type = e.target.tagName;
  
    let parentNode;
    let taskTitle;
    let taskDescription;
    let taskType;
    let submitButton;
  
    if (type === "BUTTON") {
      parentNode = e.target.parentNode.parentNode;
    } else {
      parentNode = e.target.parentNode.parentNode.parentNode;
    }
  
    taskTitle = parentNode.childNodes[3].childNodes[3];
    taskDescription = parentNode.childNodes[3].childNodes[5];
    taskType = parentNode.childNodes[3].childNodes[7].childNodes[1];
    submitButton = parentNode.childNodes[5].childNodes[1];
  
    taskTitle.setAttribute("contenteditable", "true");
    taskDescription.setAttribute("contenteditable", "true");
    taskType.setAttribute("contenteditable", "true");
  
    submitButton.setAttribute("onclick", "saveEdit.apply(this, arguments)");
    submitButton.removeAttribute("data-bs-toggle");
    submitButton.removeAttribute("data-bs-target");
    submitButton.innerHTML = "Save Changes";
  };
  
  const saveEdit = (e) => {
    if (!e) e = window.event;
  
    const targetID = e.target.id;
    const parentNode = e.target.parentNode.parentNode;
    // console.log(parentNode.childNodes);
  
    const taskTitle = parentNode.childNodes[3].childNodes[3];
    const taskDescription = parentNode.childNodes[3].childNodes[5];
    const taskType = parentNode.childNodes[3].childNodes[7].childNodes[1];
    const submitButton = parentNode.childNodes[5].childNodes[1];
  
    const updateData = {
      taskTitle: taskTitle.innerHTML,
      taskDescription: taskDescription.innerHTML,
      taskType: taskType.innerHTML,
    };
  
    let stateCopy = state.taskList;
  
    stateCopy = stateCopy.map((task) =>
      task.id === targetID  /* stateCopy.map this function update or storred a new array and storred again inside a same veriable */
        ? {
            id: task.id,
            title: updateData.taskTitle,
            description: updateData.taskDescription,
            type: updateData.taskType,
            url: task.url,
          }  /* ? means this is the case do this or this thr case this is not case do another one */ /* use map function because target particular element which find to help the of id if not find the id thne simple return the sent of the task */
        : task
    );
  
    state.taskList = stateCopy;
    updateLocalStorage();
  
    taskTitle.setAttribute("contenteditable", "false");
    taskDescription.setAttribute("contenteditable", "false");
    taskType.setAttribute("contenteditable", "false");
  
    submitButton.setAttribute("onclick", "openTask.apply(this, arguments)");
    submitButton.setAttribute("data-bs-toggle", "modal");
    submitButton.setAttribute("data-bs-target", "#showTask");
    submitButton.innerHTML = "Open Task";
  };
  
  const searchTask = (e) => {
    if (!e) e = window.event;
  
    while (taskContents.firstChild) {
      taskContents.removeChild(taskContents.firstChild);
    }
  
    const resultData = state.taskList.filter(({ title }) => {
      return title.toLowerCase().includes(e.target.value.toLowerCase());
    });
  
    console.log(resultData);
  
    resultData.map((cardData) => {
      taskContents.insertAdjacentHTML("beforeend", htmlTaskContent(cardData));
    });
  };