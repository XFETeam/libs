import { Toast as AntdToast } from 'antd-mobile';

export default class Toast {
  static createAntdToastClickEventListener({ onClose }) {
    const amToastEl = document.querySelector('.am-toast');
    const dataId = String(+new Date());
    if (!amToastEl) {
      return;
    }
    amToastEl.dataset.dataId = dataId;
    amToastEl.addEventListener('click', e => {
      const createTime = Number(e.currentTarget.dataset.dataId);
      if (createTime) {
        /**
         * 最小等待时间, 用于防止用户点击过快没有看到 toast 内容
         * @type {number}
         */
        const minimalDelay = 800;
        const timeDiff = createTime + minimalDelay - +new Date();
        const delay = timeDiff > 0 ? timeDiff : 0;
        if (delay) {
          return;
        }
        Toast.hide();
        onClose && onClose();
      }
    });
  }

  static info(content, duration, onClose = null, mask = false, closable = true) {
    AntdToast.info(content, duration, onClose, mask);
    closable && Toast.createAntdToastClickEventListener({ onClose });
  }

  static offline(content, duration, onClose = null, mask = false, closable = true) {
    AntdToast.offline(content, duration, onClose, mask);
    closable && Toast.createAntdToastClickEventListener({ onClose });
  }

  static success(content, duration, onClose = null, mask = false, closable = true) {
    AntdToast.success(content, duration, onClose, mask);
    closable && Toast.createAntdToastClickEventListener({ onClose });
  }

  static fail(content, duration, onClose = null, mask = false, closable = true) {
    AntdToast.fail(content, duration, onClose, mask);
    closable && Toast.createAntdToastClickEventListener({ onClose });
  }

  static loading(content = '加载中', duration = 999999) {
    AntdToast.loading(content, duration, null, false);
  }

  static hide() {
    AntdToast.hide();
  }
}
