import React, { useEffect, useRef } from 'react';
import { func, string, number, oneOfType, object } from 'prop-types';

const Component = ({ getSnowyParent, flakeColor, flakeForceDistance, flakeCount, computeFlakeSize, computeFlakeSpeed, computeFlakeOpacity, ...restProps }) => {
  const rootRef = useRef();

  function getSnowyWrapperElementSize() {
    let snowyWrapperElement = typeof getSnowyParent === 'function' ? getSnowyParent() : getSnowyParent;
    if (snowyWrapperElement === window || snowyWrapperElement === 'window') {
      snowyWrapperElement = window;
    }
    if (snowyWrapperElement === 'parent') {
      snowyWrapperElement = rootRef.current.parentNode;
    }
    return {
      width: window.innerWidth || snowyWrapperElement.width,
      height: window.innerHeight || snowyWrapperElement.height
    };
  }

  useEffect(() => {
    const flakes = [];
    const canvas = rootRef.current;
    const ctx = canvas.getContext('2d');
    /**
     * 雪花数量，数值越大雪花数量越多
     * @type {number}
     */
    let mX = -100;
    let mY = -100;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function snow() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < flakeCount; i++) {
        const flake = flakes[i];
        const x = mX;
        const y = mY;
        const minDist = flakeForceDistance; // 雪花距离鼠标指针的最小值，小于这个距离的雪花将受到鼠标的排斥
        const x2 = flake.x;
        const y2 = flake.y;

        const dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y));

        if (dist < minDist) {
          const force = minDist / (dist * dist);
          const xcomp = (x - x2) / dist;
          const ycomp = (y - y2) / dist;
          const deltaV = force / 2;

          flake.velX -= deltaV * xcomp;
          flake.velY -= deltaV * ycomp;
        } else {
          flake.velX *= 0.98;
          if (flake.velY <= flake.speed) {
            flake.velY = flake.speed;
          }
          flake.velX += Math.cos(flake.step += 0.05) * flake.stepSize;
        }

        ctx.fillStyle = `rgba(${flakeColor},` + flake.opacity + ')'; // 雪花颜色
        flake.y += flake.velY;
        flake.x += flake.velX;

        if (flake.y >= canvas.height || flake.y <= 0) {
          reset(flake);
        }

        if (flake.x >= canvas.width || flake.x <= 0) {
          reset(flake);
        }

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.fill();
      }

      window.requestAnimationFrame(snow);
    }

    function reset(flake) {
      flake.x = Math.floor(Math.random() * canvas.width);
      flake.y = 0;
      flake.size = computeFlakeSize(); // 加号后面的值，雪花大小，为基准值，数值越大雪花越大
      flake.speed = computeFlakeSpeed(); // 加号后面的值，雪花速度，为基准值，数值越大雪花速度越快
      flake.velY = flake.speed;
      flake.velX = 0;
      flake.opacity = computeFlakeOpacity(); // 加号后面的值，为基准值，范围0~1
    }

    function init() {
      for (let i = 0; i < flakeCount; i++) {
        const x = Math.floor(Math.random() * canvas.width);
        const y = Math.floor(Math.random() * canvas.height);
        const size = computeFlakeSize();
        const speed = computeFlakeSpeed();
        const opacity = computeFlakeOpacity();

        flakes.push({
          speed: speed,
          velY: speed,
          velX: 0,
          x: x,
          y: y,
          size: size,
          stepSize: (Math.random()) / 30, // 乘号后面的值，雪花横移幅度，为基准值，数值越大雪花横移幅度越大，0为竖直下落
          step: 0,
          angle: 180,
          opacity: opacity
        });
      }

      snow();
    }

    const onResize = function () {
      const { width, height } = getSnowyWrapperElementSize();
      canvas.width = width;
      canvas.height = height;
    };

    onResize();
    init();

    const onMove = function (e) {
      const points = e.targetTouches ? (typeof e.targetTouches[0] === 'undefined' ? e : e.targetTouches[0]) : e;
      mX = points.clientX;
      mY = points.clientY;
    };

    const onTouchEndOrCancel = () => {
      setTimeout(() => {
        mX = -100;
        mY = -100;
      });
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('touchmove', onMove);
    document.addEventListener('touchend', onTouchEndOrCancel);
    document.addEventListener('touchcancel', onTouchEndOrCancel);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onTouchEndOrCancel);
      document.removeEventListener('touchcancel', onTouchEndOrCancel);
    };
  }, []);
  return <canvas ref={rootRef} {...restProps} />;
};

Component.defaultProps = {
  getSnowyParent: window,
  flakeColor: '255,255,255',
  flakeCount: 200,
  flakeForceDistance: 100,
  computeFlakeSize: () => Math.random() * 3 + 2, // 加号后面的值，雪花大小，为基准值，数值越大雪花越大
  computeFlakeSpeed: () => Math.random() + 0.5, // 加号后面的值，雪花速度，为基准值，数值越大雪花速度越快
  computeFlakeOpacity: () => Math.random() * 0.5 + 0.3 // 加号后面的值，为基准值，范围0~1
};

Component.propsTypes = {
  /**
   * 获取下雪容器，
   * 默认： window， 即全屏下雪
   */
  getSnowyParent: oneOfType([func, object]),
  /**
   * 雪花颜色
   * 默认： rgba 中的 “255,255,255”
   */
  flakeColor: string,
  /**
   * 雪花数目
   * 默认： 200
   */
  flakeCount: number,
  /**
   * 雪花弹出“用力”距离
   * 在 PC 端时默认情况下为 mousemove 时弹开雪花
   * 在移动端时默认情况下为 touchmove 时弹开雪花
   * 默认： 100
   */
  flakeForceDistance: number,
  /**
   * 计算雪花每一片大小
   * 具体参考 defaultProps
   */
  computeFlakeSize: func,
  /**
   * 计算雪花飘落速读
   * 具体参考 defaultProps
   */
  computeFlakeSpeed: func,
  /**
   * 计算雪花渐变透明度
   * 具体参考 defaultProps
   */
  computeFlakeOpacity: func
};

export default React.memo(Component);
