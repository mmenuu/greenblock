import { Team } from "@/constants/team"

const ContactPage = () => {
    return (
        <div>
            <section className="bg-white text-gray-800">
                <div className="container p-4 mx-auto space-y-16 sm:p-10">
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold leadi sm:text-5xl font-IBM text-gray-900 md:text-5xl lg:text-6xl text-center flex justify-center space-x-2">
                            <div>
                                Meet
                            </div>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                                 Our Team
                            </span>
                        </h1>
                        <p className="max-w-2xltext-gray-400 font-BAI">Deviate Team was created by a group of four students who wanted to work or study on software development or other topics that interested them, regardless of whether they learned it in a classroom or not. They chose to learn or explore beyond the textbook or formal education, hence the name Deviate, which means outside the norm or beyond boundaries. This can be interpreted as them studying or learning what they're interested in without any external forces compelling them. They chose to follow their own paths based on their interests.</p>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        {Team.map((member, index) => (
                            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex font-BAI" key={index}>
                                <a href="#">
                                    <img className="w-full md:w-72 h-72 md:rounded-lg sm:rounded-none sm:rounded-l-lg object-cover" src={member.image} alt="Avatar" />
                                </a>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900">
                                        <a href="#">{member.name}</a>
                                    </h3>
                                    <span className="text-gray-500">{member.position}</span>
                                    <ul className="flex space-x-4 sm:mt-3">
                                        <li>
                                            <a href={member.facebook_link} className="text-gray-500 hover:text-gray-900">
                                                <img src="/facebook.svg" className="w-5 h-5" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={member.instagram_link} className="text-gray-500 hover:text-gray-900">
                                                <img src="/instagram.svg" className="w-5 h-5" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={member.github_link} className="text-gray-500 hover:text-gray-900">
                                                <img src="/github.svg" className="w-5 h-5" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage