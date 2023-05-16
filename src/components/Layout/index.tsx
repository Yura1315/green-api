import { Outlet } from 'react-router-dom';
import { PageWrapper } from './style';
import Header from '../Header';
import { ContentWrapper } from '../common/style';

const Layout = () => {
    return (
        <PageWrapper>
            <Header />
            <ContentWrapper>
                <Outlet />
            </ContentWrapper>
        </PageWrapper>
    );
};

export default Layout;
