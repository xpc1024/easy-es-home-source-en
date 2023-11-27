module.exports = function advHtml() {

  /**
   * 广告列表
   */
  let sidebarArray = [
    `<a name="adv" class="none" href="https://api-buddy.cn/" target="_blank">
      <img className="no-zoom" height="60" width="224" src="/img/sponsor/fastRequest.svg">
    </a>`,
    `<a name="adv" class="none" href="https://www.tongzhouyun.com/" target="_blank">
      <img className="no-zoom" height="60" width="224" src="/img/sponsor/agile.png">
    </a>`,
    `<a name="adv" class="none" href="http://maxkey.top/" target="_blank">
      <img className="no-zoom" height="60" width="224" src="/img/sponsor/maxkey.png">
    </a>`,
    `<a name="adv" class="none" href="http://103.118.41.167:53000/" target="_blank">
      <img className="no-zoom" height="60" width="224" src="/img/sponsor/ai4u.jpg">
    </a>`,
    `<a name="adv" class="none" href="https://www.mingdao.com?s=utm_67&utm_source=easy-es&utm_medium=banner&utm_campaign=IT%E7%BD%91%E7%AB%99&utm_content=IT%E8%B5%8B%E8%83%BD%E4%B8%9A%E5%8A%A1
" target="_blank">
       <img className="no-zoom" height="60" width="224" src="/img/sponsor/mingdao.jpg">
    </a>`,
    `<a name="adv" class="none" href="https://www.misboot.com/?from=easy-es" target="_blank">
       <img className="no-zoom" height="60" width="224" src="/img/sponsor/mis.png">
    </a>`,
    `<a name="adv" class="none" href="http://www.yunchengxc.com" target="_blank">
       <img className="no-zoom" height="60" width="224" src="/img/sponsor/yc.jpg">
    </a>`
  ]

  let _html = `<div style="width:224px;margin:0 auto;display:flex;flex-direction: column;"> 
                ${sidebarArray.join("")}
                <div style="order: 9999;">
                  <br/> 
                  <span style='color: gray;font-size: smaller;'>adv display by random</span>
                  <span style='color: #E01E5A;font-size: smaller;font-weight: bolder;float: right'>❤️<a href='/pages/fb291d/'>become sponsor</a></span>
                  <br/>
                </div>
                <div style="order: 100000;background-color:var(--borderColor);width:100%;height:1px;margin: 30px 0px 0px 0px;position:relative;">
                  <button style='border-radius: 100%;padding: 0;text-align: center;border: none;background-color: #ff3861;cursor: pointer;position: absolute;left: calc(50% - 15px);top: -15px;height: 30px;width: 30px;color: #fff;' onclick='document.getElementById("sidebar-slot-top").style.display="none"'>hide</button>
                </div>
              </div>
              `

  return _html;
}