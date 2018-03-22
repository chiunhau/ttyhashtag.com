## 架構設計目的
- 默默將開發者推向模組化的設計模式
- 讓寫好的模組不只在內部重用，也能延續到其他專案上
-

## 使用方式
### 1.建立 Component
所有 Components 都放在`/src/components`。通常有幾個建立 Component 的時機：
1. 具有獨立功能的 UI 組，將在網頁各處重用
2. 每個獨立的頁面，包含眾多 UI Components

#### Pure Component
如果該 Component 是表現性的 UI，通常不具有固定的數據操作對象，如 lebel、button 這種小 UI Components，它只接收上層傳下來的 props 來改變自己的表現方式，這種單純的東東就是 Pure Component。在本架構中可以這樣建立：
```
|-MyComponent
|—-index.js
|—-pure.js
```
`pure.js` 就是該 React Component 棲身之處，而 `index.js`只是將 `pure.js` 引入再傳出去，這樣做是為了：
1. 讓外面的世界可以只透過資料夾名稱就引入整個 Component
2. 保留 Pure Component 變成 Container 的空間（下面將說明）
3. 如此一來 `pure.js` 已經可以自己周遊列國被重複使用了，要不要 connect 不關他的事。

##### 小提示
看到 `pure.js` 就會提醒自己，寫 UI 要盡量維持 `pure`，避免奇怪的相依。

#### Component 樣式
在該 Component 資料夾內新增 `index.scss`，並在 `pure.js` 最上方以 `import './index.scss';` 方式引入。
```
|-MyComponent
|—-index.js
|——connected.js
|—-pure.js
|--index.scss
```
##### 原則
- 只寫自己的外觀樣式（formation）
- 不寫與外界的排版關係（relation），如以下：
  - Positioning (position, top, left, right, bottom)
  - Floats (float, clear)
  - Margins (margin)
  - Dimensions (width, height) *
- 所以自己與外界的 relation 就寫在上層的 Component 裡呦

### 2.連接 Redux
#### Connected Component
如果今天的 Component 是自帶固定數據操作對象的，例如網頁的 sidebar，那他除了 pure 的部分，還會再多被 `connect` 到 store 裡。資料結構就會變成：

```
|-MyComponent
|—-index.js
|——connected.js
|—-pure.js
|--index.scss
```
請注意，`pure.js` 還是維持一樣的本質，只是 `connected.js` 引入了 `pure.js` 並 `connect` 起來，最終交由 `index.js` 傳遞到外面的世界。

#### connect 的設計原則
不管有沒有 connect，Pure Component 的 props 接口要盡量扁平化以保留彈性。不要預設外面傳進來的會剛好是一個包好好的物件。如此一來如果缺少任何一個 props 都能很快的在上層就填起來（不論以什麼方法）。
```js
// Oh God don't do this :(
render() {
  return(
    <div className="user-card">
      <img src={this.props.user.image} />
      <h1>{this.props.user.name} />
      <p>{this.props.user.introduction} />
    </div>
  )
}

// Instead, do this every time :)
render() {
  return(
    <div className="user-card">
      <img src={this.props.image} />
      <h1>{this.props.name} />
      <p>{this.props.introduction} />
    </div>
  )
}
```


`render()` 內的使用者事件命名，一律以 `handle` 起始，並以箭頭函式定義以方便 `this` 的綁定。如：
```js
class Example extends React.Component {
  handleClickButton = () => {
    console.log('Clicked!')
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickButton}>Click Me</button>
      </div>
    )
  }
}
```

如果要 `mapDispatchToProps` 時，則 `props` 命名以 `on` 開頭，並一樣使用箭頭函式包裝後讓 render() 使用。用意在於：
1. 藉由命名規則的確立讓自己搞清楚到底是哪裡來的 function
2. 確保 render() 中 `this.props` 開頭的都是純值，而 `this.handle-` 開頭的都是事件。比較清楚（吧
```js
//connected.js
const mapDispatchToProps = (dispatch) => ({
  onClickButton: (config) => {
    dispatch(fetchData(config))
  }
})

//pure.js
class Example extends React.Component {
  handleClickButton = () => {
    this.props.onClickButton({url: '/some/api/'})
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickButton}>Fetch It</button>
      </div>
    )
  }
}
```

### 3.Action 與 Reducer 的設計理念
#### 省略 Action Creator
傳統的 Redux 文件會把所有 actions 集合到同一個地方，用 action creator 讓不同人取用。但在這裏很特別的是，每個 Component 的 actions 將直接寫在自己的 `connected.js` 裡，因為一般的同步 action 結構都很簡單，沒有必要開一個新檔案再 import 進來，直接手寫反而比較快。除了設定很麻煩且必定跨元件都用得到的 `fetchAction.js`。

```js
///connected.js
const mapDispatchToProps = (dispatch) => ({
  onClickIncrement: (id) => dispatch({type: 'INCREMENT_TIME', id})
})
```

#### Reducer 也用 Component 來思考
Redux 裡的 Reducer 在技術上都是全域的，任何元件都可以讀取或對他 dispatch，因此很容易「濫用」reducer。然而在這裡，Reducer 將有較嚴格的設計方式，目的是更清晰的模組化與可維護性，但缺點就是一開始要規劃比較久。
##### 依照這個原則來限制 Reducer 的滋生亂象
- Reducer 將定義在與其最相關的某一 Component 之下
- 每個 Component 最多只能定義一個 Reducer
- 又如果發現某組 UI 需要到自己一個 Reducer，則那串東西必須成為 Component

由此可見，這個作法不只關乎 reducer 而已，其實更高層次上是在影響 Components 的設計，往模組化邁進一大步（我的推測啦）。另外一種 reducer 設計理念可以參考
[這篇](http://redux.js.org/docs/recipes/reducers/ReusingReducerLogic.html#customizing-behavior-with-higher-order-reducers)。

#### CombineReducers
在 `/src/App/reducer.js` 引入所有 reducers 並 `combine`。

### 4.如何存取遠端 API 的資料
唯一使用這個特殊的 Actions `fetchActions`，同時必須理解：
1. 他是對外唯一接口
2. 他在語意上不屬於任何 Component

#### 用法
```js
//connected.js
import { fetchData } from '../fetchActions';

const mapDispatchToProps = (dispatch) => ({
  onClickFetch: (config) => {
    dispatch(fetchData(config))
  }
})

//pure.js
handleClickFetch = () => {
  this.props.onClickFetch({url: 'https://jsonplaceholder.typicode.com/posts/1', id: 'randomPage'})
}
```
#### 資料請求機制
在送出請求時，除了 `url` 外還必須附帶 `id`，`id`是指這份欲讀取資料在 state.fetch 裡的唯一 key。`dispatch(fetchData(config))` 之後的分解動作詳解：
1. `fetchAction` 會先透過附帶的 `id` 訪問 state.fetchedData[id]，、
2. 確認不存在資料後，才會正式對 API 發送請求，也就是 `dispatch(requestData(config))`
3. 如果請求成功，則會接著 `dispatch(receiveData(config, response))`，並將 `response.data` 存到 `state.fetchedData[id]`裡
4. 然後 `mapStateToProps` 就能把熱騰騰的資料餵給 `pure.js`了


### 5.Shared styles
#### Sass Bootstrap File
sass 會用到的 `variables`、`mixins` 和 `functions` 全部寫在同一個檔案`/src/styles/bootstrap.scss`，這個檔案會透過 `sass-resources-loader` 自動在每份 `.scss` 開頭注入，所以不用手動 `@import` 就能全域享用。這部分的設定寫在 `webpack.config`裡。
#### shared.scss
跨元件的樣式定義，不要寫在任何 `src/components` 裡面，請寫在 `src/styles` 裡以 `_` 開頭，並在 `shared.scss` 之中逐一 `@import`。
