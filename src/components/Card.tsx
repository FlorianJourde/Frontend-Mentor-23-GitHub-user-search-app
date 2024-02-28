import locationIcon from '../assets/icon-location.svg'
import companyIcon from '../assets/icon-company.svg'
import twitterIcon from '../assets/icon-twitter.svg'
import websiteIcon from '../assets/icon-website.svg'

export default function Card(props: any) {
  const { user } = props

  return (
    <main className="card bg-card-background p-8 rounded-2xl flex gap-8 shadow-primary transition-colors">
      <aside className='w-52 md:block hidden'>
        <img src={user.avatar_url} alt="" className="profile-picture rounded-full object-cover border-4 border-white" />
      </aside>
      <div className="user-details flex-1 flex flex-col gap-8">
        <div className="user-header flex items-start gap-4 md:gap-8">
          <div className="left-area md:hidden">
            <img src={user.avatar_url} alt="" className="profile-picture rounded-full object-cover border-2 w-16 sm:w-24 border-white md:hidden" />
          </div>
          <div className="right-area flex flex-col md:flex-row flex-wrap md:items-center w-full gap-x-6 gap-y-2">
            <h2 className="username flex-1 text-2xl md:text-4xl font-bold">{user.name}</h2>
            <p className="inscription-date text-secondary-text">Joined {user.created_at}</p>
            <p className="identifier text-button-background w-full">@{user.login}</p>
            <p className="biography w-full">{user.bio}</p>
          </div>
        </div>
        <div className="highlights-informations flex flex-wrap gap-4 bg-body-background justify-around py-4 px-6 md:py-6 md:px-10 rounded-xl transition-colors">
          <div className="repositories">
            <p className='text-sm md:text-base'>Repos</p>
            <p className='text-2xl md:text-3xl font-bold'>{user.public_repos}</p>
          </div>
          <div className="followers">
            <p className='text-sm md:text-base'>Followers</p>
            <p className='text-2xl md:text-3xl font-bold'>{user.followers}</p>
          </div>
          <div className="following">
            <p className='text-sm md:text-base'>Following</p>
            <p className='text-2xl md:text-3xl font-bold'>{user.following}</p>
          </div>
        </div>
        <div className="contact-details flex flex-col sm:grid grid-cols-2 gap-4">
          <div className="location flex gap-4">
            <img src={locationIcon} alt="Location icon" className="location-icon object-contain max-w-6" />
            <p>{user.location}</p>
          </div>
          <div className="twitter flex gap-4">
            <img src={twitterIcon} alt="Twitter icon" className="twitter-icon object-contain max-w-6" />
            <p>{user.twitter_username}</p>
          </div>
          <div className="website flex gap-4">
            <img src={websiteIcon} alt="Website icon" className="website-icon object-contain max-w-6" />
            <p>{user.blog}</p>
          </div>
          <div className="company flex gap-4">
            <img src={companyIcon} alt="Company icon" className="company-icon object-contain max-w-6" />
            <p>{user.company}</p>
          </div>
        </div>
      </div>
    </main>
  )
}
