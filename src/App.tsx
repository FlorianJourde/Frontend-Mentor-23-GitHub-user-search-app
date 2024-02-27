import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import sunThemeIcon from './assets/icon-sun.svg'
import moonThemeIcon from './assets/icon-moon.svg'
import searchIcon from './assets/icon-search.svg'
import locationIcon from './assets/icon-location.svg'
import companyIcon from './assets/icon-company.svg'
import twitterIcon from './assets/icon-twitter.svg'
import websiteIcon from './assets/icon-website.svg'
import gitHubProfilePicture from './assets/github-profile.png'

function App() {
  const [username, setUsername] = useState<string>('');
  const [user, setUser] = useState<User>(initDefaultUser);
  const [theme, setTheme] = useState<string>('light');


  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }, [theme]);

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

  async function handleSubmit(event: any) {
    event.preventDefault();

    await fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUserObject(data as User)
      });
  }

  return (
    <>
      <div className="wrapper">
        <div className="github-search-app flex flex-col gap-8">
          <header className='flex gap-4 justify-between'>
            <h1 className='company text-2xl font-bold'>devfinder</h1>
            <div onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')} className='flex gap-2 items-center cursor-pointer' id="theme-button">
              <p className='uppercase tracking-widest text-secondary-text'>{theme}</p>
              <img src={theme === 'dark' ? moonThemeIcon : sunThemeIcon} alt="" className="theme-icon object-contain" />
            </div>
          </header>
          <form className='bg-card-background p-3 rounded-2xl flex gap-4 shadow-primary' onSubmit={handleSubmit}>
            <img src={searchIcon} alt="" className="magnifying-glass-picto object-contain m-4" />
            <input className="flex-1 bg-transparent" type="text" onChange={handleChange} />
            <input className='bg-button-background text-button-text rounded-lg px-4 py-2 cursor-pointer' type="submit" value="Submit" onSubmit={handleSubmit} />
          </form>
          <main className="card bg-card-background p-8 rounded-2xl flex gap-12 shadow-primary">
            <aside className='w-52'>
              <img src={user.avatar_url} alt="" className="profile-picture rounded-full object-cover border-2 border-white" />
            </aside>
            <div className="user-details flex-1 flex flex-col gap-8">
              <div className="user-header flex items-center gap-4 flex-wrap">
                <h2 className="username flex-1 text-4xl font-bold">{user.name}</h2>
                <p className="inscription-date text-secondary-text">Joined {user.created_at}</p>
                <p className="identifier text-button-background w-full">@{user.login}</p>
              </div>
              <p className="biography">{user.bio}</p>
              <div className="highlights-informations flex gap-4 bg-body-background justify-between py-6 px-10 rounded-xl">
                <div className="repositories">
                  <p>Repos</p>
                  <p className='text-4xl font-bold'>{user.public_repos}</p>
                </div>
                <div className="followers">
                  <p>Followers</p>
                  <p className='text-4xl font-bold'>{user.followers}</p>
                </div>
                <div className="following">
                  <p>Following</p>
                  <p className='text-4xl font-bold'>{user.following}</p>
                </div>
              </div>
              <div className="contact-details grid grid-cols-2 gap-4">
                <div className="location flex gap-4">
                  <img src={locationIcon} alt="Location icon" className="location-icon object-contain" />
                  <p>{user.location}</p>
                </div>
                <div className="twitter flex gap-4">
                  <img src={twitterIcon} alt="Twitter icon" className="twitter-icon object-contain" />
                  <p>{user.twitter_username}</p>
                </div>
                <div className="website flex gap-4">
                  <img src={websiteIcon} alt="Website icon" className="website-icon object-contain" />
                  <p>{user.blog}</p>
                </div>
                <div className="company flex gap-4">
                  <img src={companyIcon} alt="Company icon" className="company-icon object-contain" />
                  <p>{user.company}</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
