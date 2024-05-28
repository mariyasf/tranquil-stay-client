import React from 'react';

const ClientQuestion = () => {
    return (
        <div>
            <section className="mt-8 lg:mt-28 max-w-[1240px] mx-auto">
                <div
                    className="text-center mt-8 lg:m-0 space-y-5 py-12 border-dashed border-y-2">
                    <h1 className="text-3xl lg:text-8xl font-bold font-Rancho">
                        Clients Question
                    </h1>
                    <p className="mx-auto lg:w-2/3 text-xl text-[#13131899]">
                        Expertly addressing client inquiries, we prioritize
                        satisfaction through clear communication and a
                        commitment to delivering exceptional service and
                        solutions.
                    </p>

                </div>

                <div
                    className="lg:flex mt-12 gap-10 justify-between p-10 border-2 rounded-md">
                    <div>
                        <img src="Images/q.jpg" alt />
                    </div>

                    <div className="pt-5 lg:flex-1 font-Cormorrant">
                        <details className="collapse collapse-plus">
                            <summary className="collapse-title text-2xl font-bold">
                                What sets your luxury accommodations apart from others?
                            </summary>
                            <div className="collapse-content">
                                <p className='text-xl'>
                                    Our luxury accommodations are distinguished by their exquisite design, high-end furnishings, and unparalleled comfort. Every detail is meticulously crafted to offer an atmosphere of sophistication and exclusivity, ensuring an unforgettable stay.

                                </p>
                            </div>
                        </details>


                        <hr />

                        <details className="collapse collapse-plus">
                            <summary className="collapse-title text-2xl font-bold">
                                What amenities are included in the presidential suite?
                            </summary>
                            <div className="collapse-content">
                                <p className='text-xl'>
                                    The presidential suite includes expansive layouts, premium amenities such as a private lounge, a fully-equipped kitchen, state-of-the-art entertainment systems, and personalized concierge service to cater to your every need.
                                </p>
                            </div>
                        </details>

                        <hr />

                        <details className="collapse collapse-plus">
                            <summary className="collapse-title text-2xl font-bold">
                                Are your family accommodations child-friendly?
                            </summary>
                            <div className="collapse-content">
                                <p className='text-xl'>
                                    Yes, our family accommodations are designed with families in mind. They feature spacious living areas, kid-friendly amenities such as cribs and high chairs, and activities for children of all ages to ensure a comfortable and enjoyable stay for everyone.
                                </p>
                            </div>
                        </details>

                        <hr />

                        <details className="collapse collapse-plus">
                            <summary className="collapse-title text-2xl font-bold">
                                What makes the premier accommodations unique?
                            </summary>
                            <div className="collapse-content">
                                <p className='text-xl'>
                                    Our premier accommodations stand out due to their prime views, central locations, and superior amenities. Each room is designed with meticulous attention to detail, providing a premium experience that combines luxury, convenience, and exceptional service.

                                </p>
                            </div>
                        </details>

                        <hr />

                        <details className="collapse collapse-plus">
                            <summary className="collapse-title text-2xl font-bold">
                                Can I request additional services during my stay?
                            </summary>
                            <div className="collapse-content">
                                <p className='text-xl'>
                                    Absolutely. We offer a range of additional services, including in-room dining, spa treatments, personal concierge, and transportation arrangements. Simply let us know your needs, and we will be delighted to accommodate them.

                                </p>
                            </div>
                        </details>

                        <hr />

                        <details className="collapse collapse-plus">
                            <summary className="collapse-title text-2xl font-bold">
                                Is there a minimum stay requirement for booking your accommodations?

                            </summary>
                            <div className="collapse-content">
                                <p className='text-xl'>
                                    While some of our accommodations may have a minimum stay requirement during peak seasons, we strive to offer flexibility. Please contact our reservations team for specific details regarding your desired dates.

                                </p>
                            </div>
                        </details>

                        <hr />

                        <details className="collapse collapse-plus">
                            <summary className="collapse-title text-2xl font-bold">
                                Do you offer any packages or special deals?
                            </summary>
                            <div className="collapse-content">
                                <p className='text-xl'>
                                    We frequently offer special packages and deals, including romantic getaways, family packages, and seasonal promotions. Please check our website or contact our reservations team for the latest offers.

                                </p>
                            </div>
                        </details>


                    </div>
                </div>
            </section>

        </div>
    );
};

export default ClientQuestion;