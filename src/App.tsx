import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import gitHubProfilePicture from './assets/github-profile.png'
import { Header } from './components/Header'
import Search from './components/Search'
import Card from './components/Card'

function App() {
  const [username, setUsername] = useState<string>('florianjourde');
  const [user, setUser] = useState<User>(initDefaultUser);
  const [theme, setTheme] = useState<string>('light');
  const [searchError, setSearchError] = useState<string>('')

  interface User {
    avatar_url: string,
    bio: string,
    blog: string,
    company: string,
    created_at: string,
    following: string,
    followers: string,
    id: number,
    location: string,
    login: string,
    message: string,
    name: string,
    public_repos: string,
    twitter_username: string,
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }, [theme]);

  useEffect(() => {
    fetchDatas(username)
  }, []);

  function initDefaultUser(): User {
    let defaultUserObject = {
      avatar_url: `${gitHubProfilePicture}`,
      bio: '',
      blog: 'www.portfolio.com',
      company: 'Company',
      created_at: 'on...',
      following: '-',
      followers: '-',
      id: 0,
      location: 'Location',
      login: 'identifier',
      message: 'User not found',
      name: 'Username',
      public_repos: '-',
      twitter_username: 'Twitter',
    }

    return defaultUserObject;
  }

  function replaceUnknown(key: string, value: any) {
    let formattedValue;
    let showNotAvailable = ['twitter_username', 'blog', 'location', 'company']

    if (key === 'created_at') {
      formattedValue = format(value, 'd MMM y');
    } else if (showNotAvailable.includes(key)) {
      formattedValue = value === null || value === '' ? 'Not Available' : value
    } else {
      formattedValue = value;
    }

    return formattedValue;
  }

  function mapUser(obj: Object, fn: Function) {
    const newObject: any = {};

    (Object.keys(obj) as (keyof typeof obj)[]).forEach((key) => {
      newObject[key] = fn(key, obj[key]);
    });

    return newObject;
  }

  function setUserObject(data: User) {
    if (data.login) {
      setUser(mapUser(data, replaceUnknown))
    } else {
      setUser(initDefaultUser())
    }
  }

  function handleChange(event: any) {
    setUsername(event.target.value)
  }

  async function fetchDatas(username: string) {
    await fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.ok) {
          setSearchError('')
          return response.json()
        } else {
          setSearchError('error')
          throw new Error("Status code error :" + response.status);
        }
      })
      .then((data) => {
        setUserObject(data as User)
      })
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    fetchDatas(username)
  }

  return (
    <>
      <div className="wrapper">
        <div className="github-search-app flex flex-col gap-8 my-5 max-w-[400px] sm:max-w-[600px] md:max-w-[unset] mx-auto">
          <Header theme={theme} setTheme={setTheme} />
          <Search searchError={searchError} handleSubmit={handleSubmit} handleChange={handleChange} />
          <Card user={user} />
        </div>
      </div>
    </>
  )
}

export default App
