import styles from '../../styles/Ninjas.module.css'

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1> All Ninjas</h1>
      {ninjas.map(ninja => (
        <div key={ninja.id}>
          <a className={styles.single}>
            <h3>{ ninja.name }</h3>
          </a>
        </div>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json();

  return {
    props: { ninjas: data }
  }
}
export default Ninjas; 