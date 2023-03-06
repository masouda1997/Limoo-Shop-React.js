import styles from 'assets/styles/components/specialProduct.component.module.scss'

const SpecialProduct = (props) => {
   return (
         <div className = {styles.specialProduct}>
            <div className={styles.header}>
               <div className={styles.circle}></div> {/* circle */}
               <div className={styles.text}>
                  <span> {props.title} </span>
               </div>
               <div className={styles.line}></div> {/* line */}
            </div>
            <div className={styles.mainContent}>
               {props.children}
            </div>
         </div>
   );
}

export {SpecialProduct}
