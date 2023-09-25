import react from 'react'

const PageWrapper = ({ className, children }) => { 
  return (
    <main id="contributors" className={`flex-1 dark:bg-gray-700 pb-10 ${className}`}>
      {children}
    </main>
  )
}

export default PageWrapper