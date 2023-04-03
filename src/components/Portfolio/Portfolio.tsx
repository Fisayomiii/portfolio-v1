import Project from "./Projects/Project";
import { motion, Variants } from "framer-motion";

function Portfolio() {
    const cardVariants: Variants = {
        offscreen: {
            y: 300
        },
        onscreen: {
            y: 60,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <>
            <motion.div initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}>
                <motion.div variants={cardVariants}>
                    <motion.div className="container" >
                        <motion.div className="content">
                            <div className="fake-big-1">Work</div>
                            <h2 aria-label="My Portfolio" className="blast-root">
                                <span className="blast" aria-hidden="true" >M</span>
                                <span className="blast" aria-hidden="true" >y</span>
                                <span className="blast" aria-hidden="true" style={{ opacity: 0 }}>.</span>
                                <span className="blast" aria-hidden="true" >P</span>
                                <span className="blast" aria-hidden="true" >o</span>
                                <span className="blast" aria-hidden="true" >r</span>
                                <span className="blast" aria-hidden="true" >t</span>
                                <span className="blast" aria-hidden="true" >f</span>
                                <span className="blast" aria-hidden="true" >o</span>
                                <span className="blast" aria-hidden="true" >l</span>
                                <span className="blast" aria-hidden="true" >i</span>
                                <span className="blast" aria-hidden="true" >o</span>
                            </h2>
                            <p>
                                A small gallery of recent projects done by me.
                                Interested to see all of the projects pushed to my Github repository? Then visit my
                                <a href="https://github.com/Fisayomiii" target="_blank" rel="noreferrer" className='portfolio_link'> GitHub</a> page.<br />
                            </p>
                        </motion.div>
                    </motion.div><br />
                    <Project />

                </motion.div>
            </motion.div>

        </>
    )
};

export default Portfolio;