import './certification.css';
import uiuxcertificate from '../../assets/certificates-images/Ravinder-Chand-UI-UX-Certificate.png'

export const Certification = () => {
    return (
        <>
            <section className='full-viewport'>
                <div className='container-fluid mt-5'>
                    <div className='row mt-5 mb-5'>
                        <div className='col-sm-12'>
                            <h2 className='text-center'>CERTIFICATIONS</h2>
                        </div>

                        <hr />

                        <div className='col-sm-12 text-center'>
                            <img src={uiuxcertificate} alt='certificate' className='certificate-dimensions' />
                        </div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#f3f4f5" fillOpacity="1" d="M0,288L13.3,261.3C26.7,235,53,181,80,138.7C106.7,96,133,64,160,90.7C186.7,117,213,203,240,245.3C266.7,288,293,288,320,245.3C346.7,203,373,117,400,96C426.7,75,453,117,480,138.7C506.7,160,533,160,560,176C586.7,192,613,224,640,208C666.7,192,693,128,720,138.7C746.7,149,773,235,800,229.3C826.7,224,853,128,880,90.7C906.7,53,933,75,960,69.3C986.7,64,1013,32,1040,58.7C1066.7,85,1093,171,1120,218.7C1146.7,267,1173,277,1200,234.7C1226.7,192,1253,96,1280,69.3C1306.7,43,1333,85,1360,96C1386.7,107,1413,85,1427,74.7L1440,64L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"></path>
                    </svg>
                </div>
            </section>
        </>
    )
}

export default Certification;