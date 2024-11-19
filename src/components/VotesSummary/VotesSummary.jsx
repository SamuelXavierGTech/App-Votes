import React, { useState } from 'react';
import styles from './VotesSummary.module.css'

const VotesSummary = ({candidates}) => {
    return (
        <div className={styles.summary}>

            <p className={styles.totalVotes}>
                Votos Totais: {candidates.reduce((total, candidate) => total + candidate.votes, 0)}
            </p>

            <p className={styles.winner}>
                Candidato Vencedor: {candidates.reduce((winner, candidate) => candidate.votes > winner.votes ? candidate : winner, candidates[0]).name}
            </p>

        </div>
    )
}

export default VotesSummary