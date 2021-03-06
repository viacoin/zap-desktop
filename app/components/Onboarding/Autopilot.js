import React from 'react'
import PropTypes from 'prop-types'
import { FaCircle, FaCircleThin } from 'react-icons/lib/fa'
import styles from './Autopilot.scss'

const Autopilot = ({ autopilot, setAutopilot }) => (
  <div className={styles.container}>
    <section className={`${styles.enable} ${autopilot && styles.active}`}>
      <div onClick={() => setAutopilot(true)}>
        {
          autopilot ?
            <FaCircle />
            :
            <FaCircleThin />
        }
        <span className={styles.label}>
          Enable Autopilot
        </span>
      </div>
    </section>
    <section className={`${styles.disable} ${(!autopilot && autopilot !== null) && styles.active}`}>
      <div onClick={() => setAutopilot(false)}>
        {
          !autopilot && autopilot !== null ?
            <FaCircle />
            :
            <FaCircleThin />
        }
        <span className={styles.label}>
          Disable Autopilot
        </span>
      </div>
    </section>
  </div>
)

Autopilot.propTypes = {
  autopilot: PropTypes.bool,
  setAutopilot: PropTypes.func.isRequired
}

export default Autopilot
