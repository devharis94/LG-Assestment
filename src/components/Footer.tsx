const Footer: React.FC = ({  }) => {
  return (
    <footer className='flex justify-between items-center bg-brand-dark px-32 w-full h-[60px] text-caption text-white'>
    <p>Copyright</p>
    <ul className='flex space-x-4 list-none'>
      <li><a href='#'>Impressum</a></li>
      <li><a href='#'>Disclaimer</a></li>
    </ul>
  </footer>
  )
}

export default Footer