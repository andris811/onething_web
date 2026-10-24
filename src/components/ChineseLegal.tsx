import type { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const linkClassName = 'text-[#a84c37] underline underline-offset-4 hover:text-[#d66a4f]';

function LegalSection({ id, title, children }: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`}
      className="scroll-mt-24 border-t border-[#E5DCC8] py-8">
      <h2 id={`${id}-heading`} className="text-2xl font-semibold text-gray-900 mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}

export default function ChineseLegal() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Navigation isLegalPage={true} />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">使用条款与隐私政策</h1>
            <p className="text-gray-600">OneThing 3.0 · 最后更新：2026 年 10 月 24 日</p>
            <p className="text-gray-700 mt-6">
              OneThing 是一款个人专注与日记应用。本页说明应用的使用规则、OneThing Plus
              的购买方式，以及我们如何处理你的信息。
            </p>
            <nav aria-label="法律信息章节"
              className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-6">
              <a href="#terms" className={linkClassName}>使用条款</a>
              <a href="#subscriptions" className={linkClassName}>购买与订阅</a>
              <a href="#privacy" className={linkClassName}>隐私政策</a>
              <a href="#contact" className={linkClassName}>联系我们</a>
            </nav>
          </header>

          <LegalSection id="terms" title="使用条款">
            <p>
              OneThing 由 András Varga（AVDev）提供。使用本应用即表示你同意本条款。
              请合法使用应用，并尊重他人的权利。你应对自己存储或分享的内容负责。
            </p>
            <p>
              你对本应用的使用许可受{' '}
              <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                className={linkClassName}>Apple 标准最终用户许可协议（EULA）</a>
              约束。本条款补充说明 OneThing 及其购买事项，不替代该许可协议，也不限制你依法享有的权利。
            </p>
            <p>
              你创建的专注事项、感悟、日记、笔记、标签、照片和保存的地点均属于你。
              我们不主张拥有这些内容的所有权。
            </p>
          </LegalSection>

          <LegalSection id="subscriptions" title="OneThing Plus 购买与订阅">
            <p>
              OneThing 提供免费功能和可选的付费 Plus 功能。Plus 提供按月或按年自动续订的订阅方案，
              在提供买断选项的情况下，也可一次性购买终身使用权限。具体功能、可用方案、计费周期和当地价格，
              会在付款前显示于应用及 Apple 的购买确认页面。
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                确认购买后，费用将从你的 Apple 账户扣除。除非你在当前订阅周期结束前至少 24 小时取消，
                否则订阅将自动续订。Apple 可能在下一周期开始前的 24 小时内，按适用的续订价格扣费。
              </li>
              <li>
                如提供免费试用或首次优惠，其资格、期限和优惠结束后的价格会在确认购买前显示。
                除非在试用结束前至少 24 小时取消，否则试用将转为付费订阅。
              </li>
              <li>
                你可以通过应用内的“管理订阅”，或设备的“设置 → 你的姓名 → 订阅”管理或取消订阅。
                具体步骤请参阅{' '}
                <a href="https://support.apple.com/zh-cn/118428" className={linkClassName}>
                  Apple 的取消订阅说明
                </a>。
                删除 OneThing 或清空日记不会取消订阅。取消付费订阅后，通常仍可使用至已付款周期结束；
                取消试用时，Apple 可能立即终止试用权限。
              </li>
              <li>
                终身 Plus 是一次性购买，无需定期付费，可永久获得 OneThing 的 Plus 使用权限。
                这不保证应用或外部服务会无限期运营。购买终身权限不会自动取消已有订阅，
                你需要另行通过 Apple 取消该订阅的自动续订。
              </li>
              <li>
                你可以使用原购买时的 Apple 账户，在应用中选择“恢复购买”。符合条件的原付费应用用户，
                在 Apple 验证其原始购买记录符合应用的迁移资格规则后，可获得 Plus 使用权限。
              </li>
              <li>
                Apple 负责处理账单及退款申请。你可以前往{' '}
                <a href="https://reportaproblem.apple.com/" className={linkClassName}>
                  reportaproblem.apple.com
                </a>{' '}
                申请退款。退款资格由 Apple 根据适用法律确定。取消自动续订本身并不等于申请退款。
                已退款或被撤销的购买可能失去 Plus 使用权限。
              </li>
            </ul>
            <p>
              Plus 到期后，付费功能将不可用。到期本身不会删除已有日记或照片；你仍可访问现有日记，
              新增内容和使用付费功能将受到免费方案的限制。设备可使用 iCloud 时，无需 Plus 也可进行 iCloud 同步。
            </p>
            <p>
              价格与方案可能调整。Apple 会按要求通知订阅价格变更，并在需要时征得你的同意。
              你的计费以购买时显示的条款及适用的 Apple 条款为准。
            </p>
          </LegalSection>

          <LegalSection id="privacy" title="隐私政策">
            <p>
              你的日记保存在设备上，并在 iCloud 可用时，通过 CloudKit 和 iCloud Drive
              同步至你自己的 Apple iCloud 账户。我们不运营接收或存储你日记内容的服务器。
              你无需单独注册 OneThing 账户。
            </p>
            <p>为提供应用功能，OneThing 会处理以下信息：</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                日记内容：你创建的专注事项、感悟、笔记、标签、照片、日期、保存的地点与草稿，
                以及外观、提醒等偏好设置。
              </li>
              <li>
                购买信息：Apple 的 StoreKit 会提供经过验证的交易和使用权限信息，
                例如所购产品、原始购买日期、到期时间和撤销状态，用于解锁或恢复购买权限。
                我们不会收到你的银行卡信息。
              </li>
              <li>
                可选的位置信息：在你授予设备定位权限后，应用可获取当前位置以提供天气信息，
                或为日记添加地点。保存的地点可能包含精确坐标、名称和地址，并随日记一起同步。
                地点搜索和地图查询使用 Apple 的地图服务。OneThing 不会在后台持续追踪你的位置。
              </li>
              <li>
                天气请求：获取基于位置的天气时，坐标会发送至 WeatherAPI.com。
                该服务提供商也会接收到 IP 地址等网络信息。天气请求不包含你的日记文字或照片。
                请参阅{' '}
                <a href="https://www.weatherapi.com/privacy" className={linkClassName}>
                  WeatherAPI.com 隐私政策
                </a>。
              </li>
              <li>
                支持邮件：如果你通过邮件联系我们，我们会收到你的邮箱地址及你发送的信息或附件，
                并将其用于回应你的请求。除非解决问题所必需，请避免发送私人日记内容。
              </li>
            </ul>
            <p>
              我们不出售你的个人数据，不将你的日记用于广告，也不会跨其他公司的应用或网站追踪你。
              本应用未集成第三方广告或分析 SDK。Apple 可能根据你的 Apple 隐私设置，
              提供崩溃报告和使用诊断信息。
            </p>
            <p>
              Apple 按照其自身的{' '}
              <a href="https://www.apple.com/legal/privacy/" className={linkClassName}>隐私政策</a>
              处理 iCloud、App Store 和地图服务相关信息。这些服务及天气服务提供商，
              可能依据各自政策，在你所在国家或地区以外处理信息。
            </p>
          </LegalSection>

          <LegalSection id="permissions" title="权限、分享与备份">
            <p>
              你可以在设备“设置”中管理定位、照片图库、相机和通知权限。
              你选择或拍摄的照片会作为日记附件保存。通知用于可选的日常提醒。
              你可以随时撤销权限；依赖这些权限的功能可能因此无法使用。
            </p>
            <p>
              分享和导出由你通过系统工具主动发起。你选定的应用、接收人或存储服务提供商，
              会接收到导出的内容，并按其自身规则处理。分享前请检查导出内容，尤其是其中的照片和地点信息。
            </p>
            <p>
              备份文件可能包含你的日记和照片，请将其存放在可信任的位置。
              iCloud 同步不能替代独立备份；同步是否可用取决于你的 Apple 账户、网络连接和 iCloud 可用空间。
            </p>
          </LegalSection>

          <LegalSection id="data-control" title="数据保留、删除与你的权利">
            <p>
              日记内容会保留在设备和你的 iCloud 存储空间中，直至你将其删除。
              你可以在应用内删除单篇日记，也可以通过“设置 → 清除所有数据”删除日记、照片和草稿，
              包括已同步至 iCloud 的日记。请为联网设备留出同步删除操作所需的时间。
            </p>
            <p>
              卸载应用会移除其本地应用数据，但不一定会删除 iCloud 内容、设备备份、导出文件或已分享的副本。
              请通过 Apple 的设置管理 iCloud 存储和备份，并单独删除导出文件。
              Apple 按其自身政策保留购买记录；清除日记数据不会删除这些记录，也不会取消订阅计费。
            </p>
            <p>
              我们仅在解决支持请求和履行适用法律义务所需的期限内保留支持邮件。
              视你所在地区的法律，你可能有权访问、更正、删除个人信息，限制或反对相关处理，
              获取信息副本，或向当地数据保护机构投诉。如需就我们持有的信息行使相关权利，请联系我们。
              我们无法读取仅保存在你的设备或个人 iCloud 账户中的日记内容。
            </p>
          </LegalSection>

          <LegalSection id="children" title="儿童隐私">
            <p>
              OneThing 不面向 13 岁以下儿童，我们不会在知情的情况下收集其个人信息。
              如果你认为有儿童向我们发送了个人信息，请联系我们处理。
              未成年人购买时，必须遵守 Apple 的账户、家长批准要求及适用法律。
            </p>
          </LegalSection>

          <LegalSection id="availability" title="服务可用性、责任与条款变更">
            <p>
              我们努力保持 OneThing 可靠运行，但无法保证服务始终不中断、不出错，或能够恢复丢失的数据。
              请为重要内容保留备份。天气和地点信息可能不完整或不准确。
            </p>
            <p>
              在法律允许的范围内，本应用按可用状态提供，不附加额外保证，
              我们的责任范围以 Apple 标准最终用户许可协议的约定为准。
              本条款不排除依法不得排除的责任，也不限制你享有的强制性消费者权利，
              包括适用的退款或撤回购买权利。
            </p>
            <p>
              功能和支持的系统可能随时间调整。对于影响付费使用权限的重大变更，我们会按法律要求通知你。
              随着应用或法律要求变化，我们可能更新本条款和隐私政策，并修改上方的更新日期。
              对于重大变更，我们会在法律要求的情况下，通过应用或其他适当方式通知你；
              依法需要同意时，我们会征求你的同意。
            </p>
          </LegalSection>

          <LegalSection id="contact" title="联系我们">
            <p>
              如需应用支持、咨询购买权限或提出隐私请求，请通过{' '}
              <a href="mailto:avdev2024@gmail.com" className={linkClassName}>
                avdev2024@gmail.com
              </a>{' '}
              联系 András Varga（AVDev）。有关 Apple 账单、取消订阅或退款的问题，请使用上方的 Apple 链接。
            </p>
          </LegalSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
