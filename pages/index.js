import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'

function fetcher(url) {
  return fetch(url).then((r) => r.json())
}

// Return a list of events as react elements
function EventsInDatabase() {
  const { data, error } = useSWR('/api/events', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (<div className={styles.container}>

    {data.map((event) => (
      <div key={event.event_id} className={styles.event}>
        <div>
          {event.event_id}
        </div>
        <div>
          {event.title}
        </div>
        <div>
          {event.created_at.split('T')[0]}
        </div>
      </div>
    ))}
  </div>
  )
}

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Database 2</title>
        <meta name="description" content="Database lesson 2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
