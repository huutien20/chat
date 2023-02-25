import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>SIGN IN</h2>
            <Input type="email" placeholder="Email hoặc số điện thoại" />
            <Input type="password" placeholder="Mật khẩu" />
            <Button className={cx('login-btn')} primary large to="/">
                Đăng nhập
            </Button>
            <div className={cx('sign-up')}>
                <div></div>
                <Button className={cx('sign-up-btn')} large to="/signup">
                    Tạo tài khoản mới
                </Button>
            </div>
        </div>
    );
}

export default Login;
