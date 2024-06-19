import { useNavigate } from "react-router-dom";
import { useAppSelectore } from "../hooks";
import Header from "../modules/Header";
import EmailIcon from '../ui-kit/EmailIcon'
import PhoneIcon from '../ui-kit/PhoneIcon'
import { useEffect } from "react";
import { getToken } from "../features/authorize";
import BackButton from '../ui-kit/BackButton';

const UserProfile = () => {
    const currUser = useAppSelectore((state) => state.usersState.selectedUser);
    const navigate = useNavigate()
    useEffect(() => {
        if(!getToken()) navigate('/signin')
    })
    return <>
        <Header classess="profile-header">
            <BackButton classess="header__button header__button--left" />
            <img alt="user avatar" src={currUser.avatar} className="avatar profile-header__avatar" />
            <section className="profile-header__bio">
                <h1>{currUser.first_name + ' ' + currUser.last_name}</h1>
                <p className="profile-header__subtitle">{currUser.email}</p>
            </section>
        </Header>
        <main className="profile-info">
            <div>
                <p>
                    Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.
                </p>

                <p>
                    В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".
                </p>

                <p>
                    Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.
                </p>
            </div>
            <address className="profile-info__contacts">
                <div className="d-flex">
                    <PhoneIcon />
                    <a href={`tel:${'89999999999'}`}>
                        {'8-999-999-99-99'}
                    </a>
                </div>
                <div className="d-flex m-t-24">
                    <EmailIcon />
                    <a href={`mailto:${currUser.email}`}>
                        {currUser.email}
                    </a>
                </div>
            </address>
        </main>
    </>
}

export default UserProfile;