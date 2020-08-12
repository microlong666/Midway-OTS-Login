import React, { useState } from 'react'
import ReactDOM from 'react-dom';

export default function App() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = () => {
    console.log('name is', name)
    console.log('password is', password)

    fetch(`/api/register?name=${name}&password=${password}`)
    .then(resp => resp.json())
    .then(resp => {
      if (resp.success === true) {
        alert('注册成功')
      }
    })
  }

  const handleLogin = () => {
    console.log('name is', name)
    console.log('password is', password)

    fetch(`/api/login?name=${name}&password=${password}`)
    .then(resp => resp.json())
    .then(resp => {
      if (resp.success === true) {
        alert(`登录成功，用户名：${resp.user.name}`)
      } else {
        alert(`登录失败，提示信息：${resp.message}`)
      }
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            注册或者登录
            </h2>
        </div>
        <form className="mt-8" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm">
            <div>
              <input
                onChange={e => {
                  console.log('当前输入的账号是：', e.target.value)
                  setName(e.target.value)
                }}
                aria-label="Email address" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address" />
            </div>
            <div className="-mt-px">
              <input
                onChange={e => {
                  setPassword(e.target.value)
                }}
                aria-label="Password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" />
            </div>
          </div>
          <div className="mt-6">
            <button type="button" onClick={handleRegister} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              </span>
                注册
              </button>
          </div>
          <div className="mt-6">
            <button type="button" onClick={handleLogin} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              </span>
                登录
              </button>
          </div>
        </form>
      </div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);