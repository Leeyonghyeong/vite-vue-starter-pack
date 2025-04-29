export class DialogController {
  title: string
  description: string
  buttonText: string
  isError: boolean
  isConfirm: boolean
  closeHandler: VoidFunction
  cancelHandler: VoidFunction
  confirmHandler: VoidFunction

  // ✅ 올바른 오버로딩 시그니처 (구현부와 맞춤)
  constructor()
  constructor(
    title: string,
    description: string,
    buttonText: string,
    isError: boolean,
    isConfirm: boolean,
    closeHandler: VoidFunction,
    cancelHandler?: VoidFunction,
    confirmHandler?: VoidFunction
  )

  // ✅ 실제 구현부 (여기에서 매개변수 유무 처리)
  constructor(
    title: string = '',
    description: string = '',
    buttonText: string = '',
    isError: boolean = false,
    isConfirm: boolean = false,
    closeHandler: VoidFunction = () => {},
    cancelHandler: VoidFunction = () => {},
    confirmHandler: VoidFunction = () => {}
  ) {
    this.title = title
    this.description = description
    this.buttonText = buttonText
    this.isError = isError
    this.isConfirm = isConfirm
    this.closeHandler = closeHandler
    this.cancelHandler = cancelHandler
    this.confirmHandler = confirmHandler
  }

  // ✅ Setter 메서드 추가
  setTitle(title: string): void {
    this.title = title
  }

  setDescription(description: string): void {
    this.description = description
  }

  setButtonText(buttonText: string): void {
    this.buttonText = buttonText
  }

  setIsError(isError: boolean): void {
    this.isError = isError
  }

  setIsConfirm(isConfirm: boolean): void {
    this.isConfirm = isConfirm
  }

  setCloseHandler(closeHandler: VoidFunction): void {
    this.closeHandler = closeHandler
  }

  setCancelHandler(cancelHandler: VoidFunction): void {
    this.cancelHandler = cancelHandler
  }

  setConfirmHandler(confirmHandler: VoidFunction): void {
    this.confirmHandler = confirmHandler
  }
}
