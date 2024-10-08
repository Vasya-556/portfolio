import React from 'react'

function Footer() {
  return (
    <footer>
        <section>
            <h4>Contacts</h4>
            <p>Email: <a href="mailto:vkobrin556@gmail.com">vkobrin556@gmail.com</a></p>
        </section>
        <section>
            <h4>Follow Me</h4>
            <p><a href="https://github.com/Vasya-556" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </section>
        <section>
            <h4>Resume</h4>
            <p><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download</a></p>
        </section>
      <div>
        <p>&copy; {new Date().getFullYear()} Vasyl Kobryn. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer