import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ ...props }) {
    return (
        <div className={cx('wrapper')}>
            <input className={cx('input')} {...props} />
        </div>
    );
}

export default Input;
