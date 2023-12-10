"use client"

import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedJournals, setLoadedJournals] = useState([]);
  const journalData = loadedJournals?.journals?.data

  useEffect(() => {
    setIsLoading(true);

    fetch("http://localhost:4000//api/v1/journals").then((response) => {
      return response.json();
    }).then((data) => {
      setIsLoading(false);
      setLoadedJournals(data)
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  
  return (
    <main>
      <ul>
        {journalData.map((journal) => (
          <li key={journal.id}>
            {journal.attributes.title}
            {journal.attributes.kind}
          </li>
        ))}
      </ul>   
    </main>
  )
}
