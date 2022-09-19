import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'
import InputAdornment from '@mui/material/InputAdornment'

import facebook from './assets/facebook.svg'
import google from './assets/google.svg'
import twitter from './assets/twitter.svg'

function App() {
  return (
    <>
      <div className="flex items-center justify-center mx-auto my-[5.5rem]">
        <div className="flex flex-col items-center bg-white w-[26rem] h-[50rem] rounded-md">
          <h1 className="text-4xl font-bold m-12">Login</h1>
          <div className="flex flex-col">
            {/* <label
              htmlFor="first_name"
              className="block mb-0 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Username
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-transparent border border-b-zinc-900"
              placeholder="Type your Username"
              required
            /> */}
            <TextField
              id="standard-basic"
              label="Username"
              placeholder="Type your username"
              variant="standard"
              type="text"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                )
              }}
            />
            {/*  <label
              htmlFor="first_name"
              className="block mb-0 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-transparent border-gray-700"
              placeholder="Type your Password"
              required
            /> */}
            <TextField
              sx={{ marginTop: '1rem', width: '20rem', textcolor: "black" }}
              id="standard-basic"
              label="Password"
              placeholder="Type your password"
              variant="standard"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                )
              }}
            />
          </div>
          <Button
            variant="text"
            sx={{ fontSize: 11, marginLeft: '12rem', color: 'black' }}
          >
            forgot password?
          </Button>

          <Button
            sx={{
              color: 'white',
              borderRadius: '16px',
              width: '20rem',
              margin: 4
            }}
            className="bg-rafael-gradient"
          >
            <strong>Login</strong>
          </Button>
          <div className="m-4 ">Or signup using</div>
          <ul className="flex gap-3">
            <li>
              <img className="w-10" src={facebook} alt="facebook" />
            </li>
            <li>
              <img className="w-10 rounded-1xl" src={twitter} alt="Twitter" />
            </li>
            <li>
              <img className="w-10" src={google} alt="Google" />
            </li>
          </ul>
          <div className="mt-[14rem]">Or signup using</div>
          <Button sx={{ background: 'transparent', margin: 2 }}>Signup</Button>
        </div>
      </div>
    </>
  )
}

export default App
