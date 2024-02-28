import searchIcon from '../assets/icon-search.svg'

export default function Search(props: any) {
  const { searchError, handleSubmit, handleChange } = props;

  return (
    <form className={'bg-card-background p-3 rounded-2xl flex flex-wrap justify-center items-center gap-4 shadow-primary transition-colors  ' + searchError} onSubmit={handleSubmit}>
      <img src={searchIcon} alt="" className="magnifying-glass-picto object-contain m-4" />
      <input className="flex-grow bg-transparent" type="text" onChange={handleChange} placeholder='Search GitHub username…' />
      <p className='text-red-600 hidden'>No result</p>
      <input className='bg-button-background w-full sm:w-[unset] hover:opacity-75 text-button-text font-bold rounded-lg px-6 py-4 cursor-pointer' type="submit" value="Submit" onSubmit={handleSubmit} />
    </form>
  )
}
