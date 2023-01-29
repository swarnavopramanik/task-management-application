import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';

import { HiTrash, HiPencil, HiPlus, HiSearch, HiCheck } from "react-icons/hi"


// the Tasks component - contains the form and the tasks
export default function Tasks() {
  const [formstate, setformstate] = useState({
    state: 'close',
    value: {
      taskId: "",
      urlInput: "",
      titleInput: "",
      typeInput: "",
      descInput: "",
    }
  }); //formstate states -{ new,edit,close} and contains inital values of form
  const [taskList, setTaskList] = useState(() => (localStorage.tasklist ? JSON.parse(localStorage.tasklist) : []));

  // to track data when the sate changes.
  useEffect(() => {
    console.log("states changed: ", formstate, taskList);
  }, [formstate, taskList]);

  function isImgUrl(url) {
    const img = new Image();
    img.src = url;
    return new Promise((resolve) => {
      img.onerror = () => resolve(false);
      img.onload = () => resolve(true);
    });
  }

  function handleTaskSubmit(values, taskId) {
    let defaultUrl = "https://mdbootstrap.com/img/new/standard/nature/182.jpg";
    if (values.urlInput === "") values.urlInput = defaultUrl;
    isImgUrl(values.urlInput)
      .then((res) => {
        if (!res) {
          values.urlInput = defaultUrl;
        }
      })
    let newList = taskList;
    newList.push({ taskId, ...values })
    setTaskList(newList);
    updateLocalStorage(newList);
    console.log("new tasklist", taskList);
    console.log("localStorage: ", JSON.parse(localStorage.tasklist))
  }

  function updateLocalStorage(list) {
    localStorage.setItem("tasklist", JSON.stringify(list))
  };

  function deleteTask(taskId) {
    let newList = taskList.filter(task => (String(task.taskId) !== taskId));
    setTaskList(newList);
    updateLocalStorage(newList);
    console.log("new tasklist", taskList);
    console.log("localStorage: ", JSON.parse(localStorage.tasklist))
  }

  // both editTask and handleEditTask used for edit task.
  function editTask(taskId) {
    let task = taskList.filter(task => task.taskId === taskId);
    setformstate({ state: 'edit', value: task[0] });
  }
  function handleEditTask(values, taskId) {
    let list = taskList.map(task => ((task.taskId === taskId) ? { taskId: taskId, ...values } : task));
    setTaskList(list);
    updateLocalStorage(list);
  }

  // clears the fields and closes form.
  function closeForm() {
    setformstate({
      ...{
        state: 'close',
        value: {
          taskId: "",
          urlInput: "",
          titleInput: "",
          typeInput: "",
          descInput: "",
        }
      }, state: 'close'
    });
  }

  function handleTaskSearch(keyword) {
    let originalList = JSON.parse(localStorage.getItem('tasklist'));
    let found = originalList.filter(task => (task.titleInput.includes(keyword) ? task : null))
    setTaskList(found);
  }

  return (
    <>
      <div className="flex justify-between items-center px-2 bg-slate-300 rounded-t-lg">
        <h2 className=" p-2 text-lg  font-medium text-black">Tasks</h2>
        <div className="flex">
          <TaskSearch changehandler={handleTaskSearch} />
          <button className=" ml-2 bg-slate-500 inline-flex items-center px-2 py-1 rounded hover:bg-slate-600 hover:duration-500 hover:text-white" onClick={() => (setformstate({ ...formstate, state: "new" }))} > <HiPlus /> <span className="mx-1 text-sm">Add</span></button>
        </div>
      </div>
      <hr className='border border-gray-100' />
      {/* tasks container */}
      <div className='h-[calc(100vh-130px)] overflow-y-auto overflow-x-hidden '>
        {formstate.state === "new" ?
          (<div className="flex w-full overflow-x-hidden md:w-4/6 mx-auto">
            <CreateTaskForm
              formState={formstate}
              changeformState={setformstate}
              submitHandler={handleTaskSubmit}
              title="Create new task"
              submitbtn="Create"
              closeForm={closeForm} />

          </div>) : null}

        {formstate.state === "edit" ?
          (<div className="flex w-full overflow-x-hidden md:w-4/6 mx-auto">
            <CreateTaskForm
              formState={formstate}
              changeformState={setformstate}
              submitHandler={handleEditTask}
              title="Enter new values"
              submitbtn="Save"
              closeForm={closeForm} />
          </div>) : null}

        {/*  */}
        <div className=" flex flex-col items-center sm:items-start sm:grid sm:grid-cols-2 lg:grid-cols-3  gap-x-2 gap-y-4 p-2 ">
          {/* tasks goes here */}
          {taskList.map(task => (<TaskCard
            key={task.taskId}
            taskId={task.taskId}
            imgurl={task.urlInput}
            title={task.titleInput}
            type={task.typeInput}
            desc={task.descInput}
            deleteTask={deleteTask}
            editTask={editTask} />))}
        </div>
      </div>
    </>
  )
}


// Tasks Search
function TaskSearch({ changehandler }) {
  return (
    <div className="flex">
      <div className="flex items-center bg-white rounded  focus:text-gray-700  border border-white focus-within:border-slate-600 pointer-events-none  ">
        <HiSearch className=' text-lg text-slate-500  mx-2' />
        <input
          type="text"
          className=" text-gray-700 py-1 mr-2 text-sm bg-white outline-none pointer-events-auto "
          id="exampleFormControlInput1"
          placeholder="Search task here"
          onChange={(e) => changehandler(e.target.value)}
        ></input>
      </div>
    </div>
  )
}


// task card 
export function TaskCard(task) {
  return (
    <div className="rounded-lg shadow-lg bg-white max-w-xs  ">
      <div className='rounded-t-lg h-28 bg-slate-300 relative '>
        <div className="inline-flex rounded-lg absolute m-1.5 p-0.5 right-0 top-0 bg-slate-200" role="group">
          <CardIcon name={<HiCheck />} tooltip="mark completed" styles="hover:bg-green-400" />
          <CardIcon name={<HiPencil />} clickhandler={() => task.editTask(task.taskId)} tooltip="edit task" styles="hover:bg-blue-400" />
          <CardIcon name={<HiTrash />} clickhandler={() => task.deleteTask(task.taskId)} tooltip="delete task" styles="hover:bg-red-400" />
        </div>
        <img className=" rounded-t-lg h-28 w-96" src={task.imgurl} alt="task image" />
      </div>
      <div className="p-2" >
        <h5 className="text-gray-900 text-xl font-sans px-2">{task.title ? task.title : "Card title"}</h5>

        <div className="flex my-1 ">
          <p className=' inline text-slate-500  bg-slate-200 px-3 rounded-lg '>{task.type ? task.type : "type"}</p>
        </div>

        <p className="text-gray-700 bg-gray-100 rounded-lg max-h-fit p-2">
          {task.desc ? (task.desc.length > 50 ? task.desc.substr(0, 40) + '...' : task.desc) : "Some quick example text to build on the card title and make up the bul..."}
        </p>
      </div>
    </div>
  )
}

function CardIcon({ name, clickhandler = null, tooltip = "tooltip", styles = "" }) {
  return (
    <button
      type="button" className={"group relative inline-block rounded-lg p-1 hover:bg-slate-100 text-slate-600 text-xl " + styles}
      onClick={clickhandler} >
      {name}
      <div className={"opacity-0 bg-slate-100 text-slate-800 text-sm rounded-lg absolute z-10 group-hover:opacity-100 px-2 py-1 mt-2 "}>
        {tooltip}
      </div>
    </button>
  )
}

// Create task form
export function CreateTaskForm({ formState, changeformState, submitHandler, title, submitbtn, closeForm }) {
  const formik = useFormik({
    initialValues: {
      urlInput: formState.value.urlInput,
      titleInput: formState.value.titleInput,
      typeInput: formState.value.typeInput,
      descInput: formState.value.descInput,
    },

    validationSchema: yup.object({
      urlInput: yup.string()
        .url("must be valid url")
        .max(2048, 'must be 2048 characters or less'),

      titleInput: yup.string()
        .min(3, "must be 3 characters or more")
        .max(40, 'must be 40 characters or less')
        .required('required'),

      typeInput: yup.string()
        .min(3, "must be 3 characters or more")
        .max(32, 'must be 32 characters or less')
        .required('required'),

      descInput: yup.string()
        .required('required')
        .max(120, 'Must be 120 characters or less')
    }),

    onSubmit: values => {
      const id = (formState.value.taskId === "" ? `${Date.now()}` : formState.value.taskId); /* when submit new data genarate a new current id */
      submitHandler(values, id);
      closeForm();
    },

  });
  return (
    <div className="block p-6 rounded-lg  bg-transparent w-full">
      <h2 className='text-black'>{title}</h2>
      <hr className='border border-slate-500 my-2' />

      <form onSubmit={formik.handleSubmit} >
        {/* url input */}
        <div className="block my-1">
          <label htmlFor={"urlInput"}>
            <p className='text-black text-sm mb-1 font-thin'>
              {formik.touched.urlInput && formik.errors.urlInput ?
                (<span className='text-sm text-red-400'>{formik.errors.urlInput}</span>) : 'Image Url'}
            </p>
            <input type={"Url"} className=" block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-800 focus:outline-none"
              id='urlInput'
              name='urlInput'
              placeholder={"Name..."}
              value={formik.values.urlInput}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
        </div>

        {/* title input */}
        <div className="block my-1">
          <label htmlFor={"titleInput"}>
            <p className='text-black text-sm mb-1 font-thin'>
              {formik.touched.titleInput && formik.errors.titleInput ?
                (<span className='text-sm text-red-400'>{formik.errors.titleInput}</span>) : 'task Title'}
            </p>
            <input type="text" className=" block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-800 focus:outline-none"
              id="titleInput"
              name='titleInput'
              placeholder="Learn web dev, read book..."
              value={formik.values.titleInput}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
        </div>

        {/* type input */}
        <div className="block my-1">
          <label htmlFor="typeInput">
            <p className='text-black text-sm mb-1 font-thin'>
              {formik.touched.typeInput && formik.errors.typeInput ?
                (<span className='text-sm text-red-400'>{formik.errors.typeInput}</span>) : 'task type'}
            </p>
            <input type={"text"} className=" block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-800 focus:outline-none"
              id='typeInput'
              name='typeInput'
              placeholder="Work ..."
              value={formik.values.typeInput}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
        </div>

        {/* description */}
        <div className=" mb-2 my-1">
          <label htmlFor="descInput" >
            <p className='text-black text-sm mb-1 font-thin'>
              {formik.touched.descInput && formik.errors.descInput ?
                (<span className='text-sm text-red-400'>{formik.errors.descInput}</span>) : 'description'}
            </p>
            <textarea
              className="max-h-40 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-800 focus:outline-none "
              id="descInput"
              name='descInput'
              rows="3"
              placeholder="Explain about the task"
              value={formik.values.descInput}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
          </label>
        </div>
        <div className="flex justify-between">
          <FormBtn name={submitbtn} type="submit" />
          <FormBtn name={"Close"} clickhandler={() => closeForm()} />
        </div>
      </form>
    </div>
  )
}

function FormBtn({ name, type = "button", clickhandler }) {
  return (
    <button type={type} className={"px-6 py-2 bg-slate-500 text-white font-mediumpadding text-sm rounded shadow-md hover:bg-slate-600 hover:shadow-lg focus:bg-slate-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-600 active:shadow-lg first-letter"}
      onClick={clickhandler}>
      {name} </button>
  )
}


