import './Modal.css';

export default function Modal({close}) {

    const closeModal = () => {
        close();
    }

    return (
        <div className='containerModal'>
            <div className="modal">
                <button onClick={closeModal}><span>close</span></button>
                <h2>Hello Modale</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque accusantium modi optio magni, aperiam veniam harum laborum ab quisquam, repudiandae temporibus ex officia, ipsam distinctio libero quod incidunt sequi. Perferendis ab tenetur qui aliquam non? Possimus quibusdam at qui vero, deserunt voluptatem, cupiditate sit dignissimos, delectus quasi laudantium corrupti explicabo.</p>
            </div>
            
        </div>
    )
}
