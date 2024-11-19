import React, { useState } from 'react';
import styles from './CandidateList.module.css'

const VotesSummary = ({candidates}) => {
    return (
        <div className={styles.allTasks}>

            <p>
                Votos Totais: {candidates.reduce((total, candidate) => total + candidate.votes, 0)}
            </p>

            <p>
                Candidato Vencedor: {candidates.reduce((winner, candidate) => candidate.votes > winner.votes ? candidate : winner, candidates[0]).name}
            </p>

        </div>
    )
}

export default VotesSummary