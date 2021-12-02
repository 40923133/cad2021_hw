var tipuesearch = {"pages": [{'title': 'About', 'text': '本學期的電腦輔助設計實習, 要求每一位學員根據本 HW template 的格式建立個人的作業倉儲與網頁. \n \n 你的學號 \n 網站倉儲:  https://github.com/mdecourse/cad2021_hw \n 網站連結:  https://mde.tw/cad2021_hw \n 其他與作者或作業相關資料說明或介紹 \n', 'tags': '', 'url': 'About.html'}, {'title': 'HW1', 'text': 'HW1 佔學期成績 25% \n HW1 必須在 2021.11.10 22:00 之前完成. \n HW1 具體項目成果回報區 將於 2021.09.23 開啟, 於  2021.11.10 22:00 關閉. \n 作業一: meArm Robot 零件繪圖與機電運動模擬場景製作 \n Step1 : 下載  meARM.7z  這個包含尚未完成組立的 meArm Robot 場景與雷射切割零件組立手冊. \n meArm_75-0040_v1.pdf  則是另外一本組立參考手冊. \n Step2 : 從課程網頁中的  Compile CoppeliaSim 頁面 , 下載  coppeliaSim 4.1.0 官方版與 MSYS2 編譯版.7z  (檔案大小 412 MB, 解開壓縮後 1GB) 可攜套件. \n Step3 : 在 HW1 中, 要求每一位學員透過程式亂數分配 (兩班實際亂數分配結果以上課時點擊下列按鈕所得結果為準) 所使用的兩套參數式 CAD 套件, 從軟體發展緣起開始進行介紹,\xa0 經過教育版軟體套件檔案的取得, 下載安裝以及配置使用. 根據 Step1 中的零件尺寸, 逐一完成 meArm Robot 各零件繪製與組立. 並將零件 匯入  CoppeliaSim 進行組裝配置後, 以  UI 介面 中的 slider 控制 meArm Robot 各軸的旋轉作動. \n 2b CAD 套件分配結果:  https://mde.tw/cad2021/downloads/online/2b_hw1_cad.txt \n 附件: \n 1. CAD 套件分配表: \n sw: Solidworks, inv: Inventor, nx: NX12, ons: Onshape, slvs: Solvespace \n 2a 套件亂數分配結果 \n 2b 套件亂數分配結果 \n 2. 在兩套 CAD 完成零件繪圖並轉入 CoppeliaSim 後, 為了建立 Dynamic Model 必須利用  shape edit modes  轉為  clean model , 並與實際轉入的 STL 格式零件外形結合應用後建立模擬場景 (scenes). \n 3. meARM Robot  動態模擬場景 的建構, 可參考  0 ,  1 ,  2 ,  3 ,  4 ,  5 ,  6 ,  7 , 也可參考  Uarm Robot model  與相關 影片 . \n 4. CoppeliaSim design dynamic simulations  說明頁面 . \n 5.  網際 Lua  程式執行. \n 6.  meArm.slvs ,  meArm_in_solvespace.slvs \n 7. UI 介面程式參考: \n function closeEventHandler(h)\n    sim.addLog(sim.verbosity_scriptinfos,\'Window \'..h..\' is closing...\')\n    simUI.hide(h)\nend\n\nfunction joint1_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta1 set to \'..newVal)\n    sim.setJointTargetPosition(joint1, newVal*deg)\nend\n\nfunction joint2_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta2 set to \'..newVal)\n    sim.setJointTargetPosition(joint2, newVal*deg)\nend\n\nfunction joint3_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta3 set to \'..newVal)\n    sim.setJointTargetPosition(joint3, newVal*deg)\nend\n\nfunction joint16_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta16 set to \'..newVal)\n    sim.setJointTargetPosition(joint16, newVal*deg)\n    sim.setJointTargetPosition(joint20, -newVal*deg)\nend\n\nfunction sysCall_init()\n    -- do some initialization here\n    joint1 = sim.getObjectHandle(\'motor1\')\n    joint2 = sim.getObjectHandle(\'motor2\')\n    joint3 = sim.getObjectHandle(\'motor3\')\n    joint16 = sim.getObjectHandle(\'motor16\')\n    joint20 = sim.getObjectHandle(\'motor20\')\n    i = 0\n    deg = math.pi/180\n    print(i)\n    xml = [[\n<ui closeable="true" on-close="closeEventHandler" resizable="true">\n    <label text="This is a demo of the CustomUI plugin. Browse through the tabs below to explore all the widgets that can be created with the plugin." wordwrap="true" />\n    <tabs>\n        <tab title="Numeric">a\n            <label text="Sliders can be oriented horizontally or vertically, and have optional properties that can be set (in the XML) such as minimum and maximum value." wordwrap="true" />\n            <label text="" id="3000" wordwrap="true" />\n            <label text="theta1" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="360" on-change="joint1_rotate" />\n            <label text="theta2" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="65" on-change="joint2_rotate" />\n            <label text="theta3" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="185" on-change="joint3_rotate" />\n            <label text="theta16" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="15" on-change="joint16_rotate" />\n        </tab>\n    </tabs>\n</ui>\n]]\n    ui=simUI.create(xml)\n    \nend \n \n (From:  2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf ) \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'CAD1 繪圖', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 緣起說明與介紹 \n 請不要直接從找到的 CAD1 套件說明複製貼上, 而是應該要看完各種參考資料後, 重新打字彙整. \n', 'tags': '', 'url': 'CAD1 繪圖.html'}, {'title': 'CAD1 安裝配置', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 套件下載安裝與配置 \n CAD1 下載安裝與配置流程 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020 下載安裝與配置 」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n 由於安裝配置 Solidworks 時必須使用 nfu 的 vpn, 因此各學員必須按照 說明 , 完成本學期的 vpn 使用申請. \n Solidworks 分別提供 2017 與 2020 版本: \n SW2017 Professional 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n SW2020 Professional 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n NX12 版本: \n NX12 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n NX12 可攜版本下載 \xa0(必須先登入 @gm 帳號後才能下載) \n Inventor: \n 請在校園網路, 使用 nfu vpn 或設定系上代理主機, 就可以從  https://2019wcm.blogspot.com/2019/07/autodesk-inventor-professional.html  嘗試下載 autodesk.iso 後安裝 Inventor Professional 版本. \n Onshape: \n 至  https://www.onshape.com/en/  申請帳號後使用. \n Solvespace: \n 至  https://solvespace.com  下載或從  https://github.com/solvespace/solvespace  下載原始碼, 以可攜程式系統自行編譯後使用. \n', 'tags': '', 'url': 'CAD1 安裝配置.html'}, {'title': 'CAD1 操作流程', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 零組件繪圖操作流程影片 (Youtube) \n CAD1 零組件繪圖教學影片 (Wink) \n CAD1 零組件繪圖教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零組件繪圖教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD1 操作流程.html'}, {'title': 'CAD2 繪圖', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 緣起說明與介紹 \n 請不要直接從找到的 CAD2 套件說明複製貼上, 而是應該要看完各種參考資料後, 重新打字彙整. \n', 'tags': '', 'url': 'CAD2 繪圖.html'}, {'title': 'CAD2 安裝配置', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 套件下載安裝與配置 \n CAD2 套件下載安裝與配置影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  套件下載安裝與配置影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD2 安裝配置.html'}, {'title': 'CAD2 操作流程', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 零組件繪圖操作流程影片 (Youtube) \n CAD2 零組件繪圖教學影片 (Wink) \n CAD2 零組件繪圖教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零組件繪圖教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD2 操作流程.html'}, {'title': '運動場景', 'text': 'CAD1: \n CAD1 零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n CAD1 零件轉入 CoppeliaSim 教學影片 (Wink) \n CAD1 轉入 Coppeliasim 教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零件轉入 CoppeliaSim 教學影片」且加上 語音說明 與 字幕. \n CAD2: \n CAD2 零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n CAD2 零件轉入 CoppeliaSim 教學影片 (Wink) \n CAD2 轉入 Coppeliasim 教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零件轉入 CoppeliaSim 教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': '運動場景.html'}, {'title': 'HW1-1', 'text': 'HW1-1 佔學期成績 15% \n HW1-1 必須在 2021.12.01 22:00 之前完成. \n HW1-1 具體項目成果回報區 將於 2021.11.18 開啟, 於  2021.12.01 22:00 關閉. \n 作業 1-1: Mirobot 機械手臂場景組合 \n 說明: meArm Robot 有四個自由度, 請根據 HW1 的零組件繪製組立與 CoppeliaSim 運動場景模擬, 延伸至  Task1-1  中六個自由度的 Mirobot 機械手臂. \n mirobot_part1_to_part5.7z  為取自 \xa0 https://github.com/wlkata/Mirobot-STL  的參考零件. 請利用場景中 Mirobot STL 零件, 組合為可以透過  UI 介面 中的 slider 控制各軸作動旋轉的運動模型. \n 請根據  Task1-1  中的說明, 完成各項指定任務. \n', 'tags': '', 'url': 'HW1-1.html'}, {'title': 'HW2', 'text': 'HW2 佔學期成績 20% \n HW2 必須在 2021.12.22 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.12.09 開啟, 於  2021.12.22 22:00 關閉. \n meArm 逆向運動學與網際參數式 CAD API 結合應用. \n 請將  https://github.com/mdecourse/meArm  中的 meArm Robot 逆向運動學程式, 改為 Lua 與 Python 程式, 使能套用至 HW1 所完成的 CoppeliaSim meArm 運動模擬場景. 並分別採 Lua, Legacy remote API 及 Bluezero remote API 逆向運動的方式進行控制. \n 請利用  Task2  中的 Solidworks, Inventor 與 NX API 程式控制 meArm Robot 零組件尺寸, 說明並討論如何透過網際程式控制 meArm Robot 的零件尺寸, 並結合上述逆向運動學程式庫, 使得自動化機電產品開發流程更容易滿足客製化需求. \n 參考: \n 2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf \n Robot Manipulator Control with Inverse Kinematics PD-Pseudoinverse Jacobian and Forward Kinematics Denavit Hartenber.pdf \n KINEMATIC ANALYSIS FOR ROBOT ARM.pdf \n https://codebender.cc/user/MeArm \n https://github.com/mdecourse/meArmPi \n /downloads/MeArmPiTechnicalOverviewV0-3DRAFT.pdf \n https://github.com/mdecourse/me-arm-ik \n https://github.com/mdecourse/mearm_model \n https://courses.ece.cornell.edu/ece5990/ECE5725_Fall2016_Projects/pas324_ml634/index.html \n https://github.com/mdecourse/InefficientSkittleSorter \n https://mearm.com \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 為選項作業. \n HW3 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n https://mde.tw/cad2021/content/Task3.html \xa0 \n https://mde.tw/cad2021/content/Task4.html \n https://mde.tw/cad2021/content/Task5.html \n https://mde.tw/cad2021/content/Task6.html \n https://mde.tw/cad2021/content/Task7.html \n 請從上列 Tasks 中自行選擇項目內容完成 HW3. \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 40% \n 2a 與 2b 必須在 2022.01.06 上課之前完成 Final Project \n Final Project 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n 彈性製造系統場景設計與製作 \n 請從  https://github.com/mdecourse/scenes  與  https://github.com/mdecourse/models  中選擇場景或模型, 配合  cad2021_textbook.pdf  (登入 @gm 帳號後下載) 教材中的內容, 自選製作與組立產品, 組合成一個 Flexible Manufacturing System 系統場景. \n 彈性製造系統內容說明 \n 範例: \n \n \n', 'tags': '', 'url': 'Final Project.html'}, {'title': 'HW_1', 'text': '', 'tags': '', 'url': 'HW_1.html'}, {'title': 'SolidWorks 介紹', 'text': '始於 1993 年，當時創始人 Jon Hirschtick 招募了一個工程師團隊，目的是讓 3D CAD 更易於使用。Hirschtick 用他在著名的麻省理工學院二十一點團隊成員期間賺取的 100 萬美元來啟動他的新事業。該團隊的目標是構建一個基於 Windows 平台的易於使用、價格合理的軟件。當時所有其他流行的 CAD 系統都是在 Unix 上構建的。經過幾年的開發，SOLIDWORKS 的初始版本終於問世了 \n 1995 \n SOLIDWORKS 的價格僅為 4,000 美元，而其他 CAD 系統需要 18,000 美元。 \n 該軟件更易於使用。易用性的很大一部分是由於採用了現代的、眾所周知的 Windows 界面。 \n 該模型的可視化。在全光照、陰影環境中構建特徵與傳統建模空間形成鮮明對比，傳統建模空間僅顯示黑色 \n 背景下的線框。 \n 使用與我們現在熟悉的類似的 FeatureManager 來顯示模型構建的歷史。 \n 零件、裝配體和圖紙從一開始就都可用。用戶還不能在裝配體中應用配合，但仍然可以將零部件放置到位 \n 置。 \n 發布功能面板，現在類似於設計庫的功能。可以拖放到模型上的預製特徵 \n 草圖診斷幫助用戶理解為什麼草圖不適用於特定特徵放樣和掃掠裝配體包絡的 \n 1996 \n 引入上下文建模，這允許使用者自上而下的裝配建模方法 \n 用戶現在可以在裝配體中使用配合併捕捉動態裝配體運動。除了乾涉檢測外，用戶還可以更輕鬆地驗證形 \n 狀、配合和功能 \n 拖放功能以將一個裝配組件移動到另一個裝配 \n 零件 \n 自動物料清單中的配置。只有一種方法沒有自定義選項，但它有效 \n 1997 \n 首次發布鈑金功能 \n 庫特徵現在可用 \n 放樣特徵現在可以使用 \n Dassault Systemes 收購的 SOLIDWORKS引導曲線 \n 1997+ \n 面圓角的歷史介紹 \n 裝配體配置 \n 完全可定制的裝配體分解視圖 \n SOLIDWORKS Viewer 作為免費產品推出，用於與非 CAD 用戶共享設計並在與外部各方共享數據時保護 \n 知識產權 \n SOLIDWORKS 1998 的歷史 \n 1998+ \n 智慧配合，在建築袁建中更多的使用施放自動化 \n 輕量級元件，說明用戶不斷製作越來越大的元件 \n 推出表面工具 \n 黨入黨的功能工作，以便能夠更有教的使用來自其他軟體的現有 3D 數據 \n 首次 CSWP 考試發布 \n 1999 \n Solidworks固體工作推出 \n 拖動元件時元件的吉時碰撞檢測 \n 引入3D草圖 \n 管道模組已發布 \n 2D命令模擬器，幫助縮小AutoCad以前使用者的差距 \n 2000 \n eDRAWINGS已發布 \n 實施孔精靈介面 \n 表面在編織、修剪和擴展面的能力下變得更加有用 \n SOLIDWORKS Explorer推出 \n 動態間隙檢測，以驗證元件之間的最小間隙 \n 2001 \n 元件中的鏡像元件 \n 抬頭互動。以前在任何CAD系統中，當選擇命令時，軟體都會在模型頂部彈出整個對話，SOLIDWORKS \n 消除這點，改為 PropertyManagers，並將陰影標註返回模型。 \n 現在允許靈活的子元件，近一步或的準確的裝配運動 \n 引入填充表面命令 \n DXF/DWG導入發布 \n 3D會議，在最終幾個版本後退出 \n 2001+ \n 運動類比功能現在可以捕獲元件在元件中移動的實際物理動態 \n 引入大型裝配模式 \n 實現了2D到3D轉換工具，使2D CAD數據能夠輕鬆轉換為功能及齊全的3D模型 \n SOLIDWORKS office介紹，將常用的附加元件包裝成一個個產品 \n Dassault Systemes 收購 SRAC 並開始將模擬引入主流設計過程 \n 2003 \n COSMOSXpress，第一個Xpress產品，帶來了簡單的部分驗證到每個桌面 \n 3DContentCentral\xa0為使用者提供了一個社區來互動和共用他們的模型 \n 多體建設計，是焊接、板金和模具設計的基礎 \n PDMWorks 被收購，SOLIDWORKS Office專業包，開始將PDM作為提供給每個客戶的內容的一部份 \n 2004 \n 介面更新，包括 CommandManager、flyout FeatureManager和Manager view tabs的PropertyManager 和 ConfigurationManager \n 引入了模具工具和焊接 \n 實施自動Balloon命令 以匹配來自BOM專案編號的balloon編號 \n 限制配合以捕獲更複雜的裝配運動 \n RealView圖形推出，以便隨時提供更多逼真圖形 \n 繪圖比較，為使用者提供比較兩個圖紙之間變化的工具 \n 2005 \n 彈性功能 \n 電氣路由與管道路由一起進行 \n 圖紙中的自動維度，以捕獲模型中以定義的尺寸 \n 繪製無限線的能力 \n SOLIDWORKS Rx釋出，以幫助季ˋ樹支援更好的識別問題 \n 2006 \n 智慧元件發布具有功能，允許為硬體等事項提供智慧裝配元件放置 \n 引入填充模式 \n 引入草圖塊 \n 顯示狀態 \n 設計檢查器，允許使用者根據公司標準動態檢查其型號 \n 添加相機檢視功能 \n SOLIDWORKS Office Premium包發布，包括路由、COSMOSWorks和COSMOSMotion運動類比和掃描到3D \n 2007 \n SWIFT工具可在提供自動化解決方案的同時，幫助設計者動態了結其型號存在或錯誤的原因 \n 在元件中提供皮帶、鍊條和齒輪功能 \n 浮出水面的自由形式命令 \n 企業PDM引入 \n 2008 \n 用戶介面徹底檢修和現代化，並配備了新的功能表欄和 CommandManager layout，上下文工具列和快捷方式也首次可用，所有設些介面元件現在也完全可定製 \n 即時3D，提供拖動和操啜幾何形狀的能力，以輕鬆測試不同設計概念 \n TolAnalyst發布 \n 設計剪貼版，通過解剖現有數據以在另一種型號中重複使用，使用現有2D和3D數據的再利用 \n 驅動系工作快壓和DFMXpres推出 \n 2009 \n PhotoView360影像渲染作為訪問處理系多和功能的第一個渲染器推出 \n SpeedPak現已可用於簡化元件中的元件 \n 為追求目標的能力引入了感測器 \n 電路工程發布並添加SOLIDWORKS\xa0 Office Premium包 \n 3DVIA Composer發布 \n 2010 \n 可持續發展一攬子計畫現在提供，以幫助使用者了解其設計的環境影響 \n 快速維度使創建細節圖紙變得容易更多 \n 引入基於事件的運動類比 \n 使次提供滑鼠手勢快結方式 \n 多體鈑金建模現已推出 \n 2011 \n 照片View360已完全集成到固體工作介面中 \n 演練能力現已可用 \n 引入失敗工具已說明限制模型中的知識產權數量 \n 平面簡化現在已在類比中提供 \n 圖紙中的自動排列尺寸 \n 2012 \n 方程編輯器進行了徹底檢修，使用戶更加有好 \n 大型設計回顧介紹 \n 功能凍結現在使用戶能夠對性能進行更多控制 \n 板金增強:在邊緣法蘭中有更多選擇，引入掃法蘭，形成工具使用戶更有好 \n 已發布成本計算附加元件 \n 2013 \n 查看方向被賦予了對話框，不再只是 heads-up 工具欄上，還引入了選擇器立方體，並具有保存檢視工以後使用的能力 \n 以前的版本黨戶操作性:2013年文件現在可以在20112SP5中打開 \n 錐體素描實體介紹 \n 相交功能 \n 在客戶門戶上提供CAD管理員儀表板 \n 2014 \n 通過上下文工具列快結方式添加標準配合能力 \n 替換草圖實體使用戶能夠用心的實體替換舊實體，並且人然保留下游參考 \n 在金屬片中引入的放樣彎曲功能 \n 能夠創建錐圓角 \n 樣是飛濺草圖命令 \n 自動縮放第一個草圖，現在在草圖上創建第一個維度時，所有實體都會調整大小以縮放 \n 配置結構成員配置配置檔的能力，配置草圖黨現在允許配置 \n MySolidworks做為社區，自部培訓合夥有固件工作的在縣資源發布 \n 2015 \n 動態參考可視化，幫助使用者了解父母孩子的關係 \n 引入選擇及 \n 直接從固體列印出的3D列印能力 \n 類比疲勞研究 \n 配置黨中心配合 \n 固體工作MBD發布 \n 2016 \n 用戶介面重新設計，包括更好的支援高解析度顯示器 \n 藍色\\灰色色托盤在傳統配色方案上出現預設 \n 引入Slection b readcrumbs\xa0 ，使相關命令更加容易訪問 \n Mate控制器工具 \n 全球替換失敗Mate實體的能力 \n 引入現程功能 \n PDM標準發布並新增到SOLIDWORKS Professional包中 \n SOLIDWORKS Visualize釋出獨立照片 \n 2017 \n 引入3D互連，將不同黨類型的協作簡化為固體工作 \n 資產分布器與地面平面的雌性配合，使大型組裝布局容易 \n 引入高級孔功能 \n 增加包裝功能，以在更多淚盈的面部選擇上創建幾何形狀 \n 陰影草圖輪廓，增強選擇和操作功能 \n 2018 \n SOLIDWORKS工作啟動時的歡迎對話 \n 用戶設置ˋ現在可以跟蹤登陸，新發布的在線許可也可以遵循此登陸，當使用捨需要在多台腦使用SOLIDWORKS時，還可以為使用者提供另一種選擇 \n 選擇幾何形狀，允許使用者忽略幾何形狀，並在其上面選擇其他體 \n 引入標籤和插槽功能，使以前用於板金和焊接的手動方法自動化 \n 在3D草圖中鏡像實體的能力 \n 首次提供筆、觸摸和手勢素描功能 \n 引入拓撲類比研究 \n 2019 \n 顯著的˙裝備性能改進 \n 剪影失敗命令，簡化從模興中刪除細節的過程，以改進性能或保護自智慧財產權 \n 按狀態group mates的能力 \n 部分槌子和圓角 \n 將圖像轉換為網格/凹凸圖。從圖像檔創建實際的3D幾何形狀 \n 2020 \n 圖紙的詳細說明模式允許快速打開大型複雜圖紙以進行快速編輯和列印 \n 過去幾年的增強圖形性能擴展到包括圖紙，在平移，縮放或旋轉大型模型時，提升保持較高的細節和貞速率 \n 新的柔性元件功能意味著彈簧等部件可以在裝配中時線其全系列運動 \n 新增功能天下道流行的快速交配工具列:插槽配合、寬度配合、限制距離配合、限制角度配合和配合對齊控制 \n 2021 \n 改進遮擋剃除、剪影邊緣和繪圖以及愾速配置開關的性能 \n 重作功能的重大發展，以便更改不會丟失，現在支援Redo的60多個功能 \n 在繪圖中詳細說明模式的其他功能: 添加孔標註、編輯線有尺寸和註釋、以及添加詳細資訊、中斷和作物視 \n 圖 \n 添加顏色時取器以選擇外部應用的外觀顏色 \n 邊緣法欄現在可以在鈑金部件的非平面切線邊緣上創建 \n 2022 \n 新的螺柱精靈輕鬆創建外部螺紋螺柱功能 \n 訪問所有圖紙的詳細化模式，無論檔以前是如何保存的 \n BOM表中的切割清單支持顯著改善 \n 創建配置時，新配置表可節省時間。減化的整合工作流程可以創件具有SOLIDWORKS本地表的桌面驅動部件 \n 幾何容差得用戶介面得到改善 \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'SolidWorks 介紹.html'}, {'title': 'Solvespace 介紹', 'text': 'Solvespace \n 開發人員 : Jonathan Westhues \n 初始版本 : 2008年發布 \n 穩定版本發布 : 2021/4/18 \n 倉儲位置\xa0 https://github.com/solvespace/solvespace \n 編譯語言 : c++ \n 操作系統 : Windows. Linux, Mac \n 平台 : PC \n 類型 : CAD \n 網站 :\xa0 https://solvespace.com/index.pl \n 許可證 : GPL-3.0-or-late \n solvespace 是一個免費且開源的2D和3D CAD程式，他是一種基於約束的參數建模機，具有簡單的機械模擬功能 \n 功能 \n 建模3D部件 : 用擠出、旋轉和布林(聯合/差集)操作繪製 \n 建模2D部件 : 將零件繪製為單個部分，並作為DXF、PDF或SVG出口，使用3D裝配來驗證是否合適 \n 準備CAM數據 : 為水刀切割或雷射切割機輸出2D向量，或生成STEP或STL，用於匯入第三方CAM軟體 \n 機制設計 : 使用約束解算氣類比平面或空間連結，帶銷、球或滑動街頭 \n 平面和固體幾何學 : 用即時尺寸繪圖替換手解的三角學和電子表格 \n', 'tags': '', 'url': 'Solvespace 介紹.html'}, {'title': 'HW11', 'text': '', 'tags': '', 'url': 'HW11.html'}, {'title': '零件檔案及尺寸(NX,slvs)', 'text': '結構\xa0 NX \xa0 slvs \n \n 零件1\xa0\xa0 NX \xa0 slvs \n \n 零件2\xa0 NX \xa0 slvs \n \n 零件3\xa0 NX \xa0 slvs \n \n 零件4\xa0\xa0 NX \xa0 slvs', 'tags': '', 'url': '零件檔案及尺寸(NX,slvs).html'}, {'title': 'NX繪圖過程(wink)', 'text': '', 'tags': '', 'url': 'NX繪圖過程(wink).html'}, {'title': 'slvs繪圖過程(wink)', 'text': '\n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'slvs繪圖過程(wink).html'}, {'title': 'Coppeniasim運動模擬過程(wink)', 'text': '\n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Coppeniasim運動模擬過程(wink).html'}]};