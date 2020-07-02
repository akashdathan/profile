import Name from '../components/name';

function HomePage() {
  return (
    <div>
      <Name/>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{backgroundColor: 'white', margin: 50, height: 68, width: 218, borderRadius: '5px' }} >
          <a href="https://stackoverflow.com/users/5924523/akash-dathan">
            <img style={{ borderRadius: '5px', margin: '5px' }}src="https://stackoverflow.com/users/flair/5924523.png?theme=dark" width="208" height="58" alt="profile for Akash Dathan at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for Akash Dathan at Stack Overflow, Q&amp;A for professional and enthusiast programmers" />
          </a>
        </div>

        <div style={{backgroundColor: 'white', margin: 50, height: 70, width: 70, borderRadius: '10px' }} >
          <a href="https://dev.to/akashdathan">
            <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" width="70" height="70" alt="Akash Dathan's DEV Profile"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomePage;