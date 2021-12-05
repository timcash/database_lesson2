import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((r) => r.json())

// Return a list of events as react elements
function EventsInDatabase() {
  const { data, error } = useSWR('/api/events', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (<div className={styles.items}>

    {data.map((event) => (
      <div key={event.event_id}>
        <div>
           {event.created_at} 
        </div>
        <div>
           {event.title}
        </div>
        </div> 
      ))}
  </div>
  )
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Database 2</title>
        <meta name="description" content="Database lesson 2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.page}>
        <h1>
          Database lesson 2
        </h1>
        <EventsInDatabase></EventsInDatabase>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
