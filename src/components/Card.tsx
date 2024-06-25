import locationIcon from '../assets/icon-location.svg'
import companyIcon from '../assets/icon-company.svg'
import twitterIcon from '../assets/icon-twitter.svg'
import websiteIcon from '../assets/icon-website.svg'
import { motion, AnimatePresence } from 'framer-motion'
import CountUp from 'react-countup'

export default function Card(props: any) {
  const { user } = props

  return (
    <AnimatePresence mode='wait' initial={false}>

      <motion.main
        initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0)" }}
        exit={{ y: 20, opacity: 0, filter: "blur(5px)" }}
        key={user.id}
        className="card bg-card-background p-8 rounded-2xl flex gap-8 shadow-primary transition-colors">
        <aside className='w-36 md:block hidden'>
          <img src={user.avatar_url} alt="" className="profile-picture rounded-full object-cover shadow-[0_0_0_4px_white] transition-shadow" />
        </aside>
        <div className="user-details flex-1 flex flex-col gap-8">
          <div className="user-header flex items-start gap-4 md:gap-8">
            <div className="left-area md:hidden">
              <AnimatePresence mode='wait'>

                <motion.img
                  initial={{ y: 10, opacity: 0, filter: "blur(5px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0)" }}
                  transition={{ delay: .4 }}
                  src={user.avatar_url} alt="" className="profile-picture rounded-full object-cover w-16 sm:w-24 md:hidden shadow-[0_0_0_2px_white]" />

              </AnimatePresence>
            </div>
            <div className="right-area flex flex-col md:flex-row flex-wrap md:items-center w-full gap-x-6 gap-y-2">
              <h2 className="username flex-1 text-2xl md:text-3xl font-bold">{user.name === null ? user.login : user.name}</h2>
              <p className="inscription-date text-secondary-text">Joined {user.created_at}</p>
              <div className='w-full'>
                <a href={`https://github.com/${user.login}`} target='_blank' className="identifier text-button-background hover:opacity-75 transition-opacity">@{user.login}</a>
              </div>
              <p className="biography text-secondary-text w-full">{user.bio}</p>
            </div>
          </div>
          <div className="highlights-informations flex flex-wrap gap-4 bg-body-background justify-around py-4 px-6 md:py-6 md:px-8 rounded-xl transition-colors">
            <div className="repositories">
              <p className='text-sm md:text-base'>Repos</p>
              {/* <p className='text-2xl md:text-3xl font-bold'>{user.public_repos}</p> */}
              <p className='text-2xl md:text-3xl font-bold'><CountUp end={user.public_repos} delay={0} /></p>
            </div>
            <div className="followers">
              <p className='text-sm md:text-base'>Followers</p>
              {/* <p className='text-2xl md:text-3xl font-bold'>{user.followers}</p> */}
              <p className='text-2xl md:text-3xl font-bold'><CountUp end={user.followers} delay={0.3} /></p>
            </div>
            <div className="following">
              <p className='text-sm md:text-base'>Following</p>
              {/* <p className='text-2xl md:text-3xl font-bold'>{user.following}</p> */}
              <p className='text-2xl md:text-3xl font-bold'><CountUp end={user.following} delay={0.6} /></p>
            </div>
          </div>
          <div className="contact-details flex flex-col sm:grid grid-cols-2 gap-4">
            <div className={`location flex items-center gap-4 ${user.location === 'Not Available' ? 'opacity-50' : ''}`}>
              <img src={locationIcon} alt="Location icon" className="location-icon object-contain max-w-6" />
              <p>{user.location}</p>
            </div>
            <div className={`website flex items-center gap-4 ${user.blog === 'Not Available' ? 'opacity-50' : ''}`}>
              <img src={websiteIcon} alt="Website icon" className="website-icon object-contain max-w-6" />
              {user.blog === 'Not Available' ? <p>{user.blog}</p> : <a className='underline' href={user.blog} target='_blank'>Website</a>}
            </div>
            <div className={`twitter flex items-center gap-4 ${user.twitter_username === 'Not Available' ? 'opacity-50' : ''}`}>
              <img src={twitterIcon} alt="Twitter icon" className="twitter-icon object-contain max-w-6" />
              <p>{user.twitter_username}</p>
            </div>
            <div className={`company flex items-center gap-4 ${user.company === 'Not Available' ? 'opacity-50' : ''}`}>
              <img src={companyIcon} alt="Company icon" className="company-icon object-contain max-w-6" />
              <p>{user.company}</p>
            </div>
          </div>
        </div>
      </motion.main>

    </AnimatePresence>

  )
}
