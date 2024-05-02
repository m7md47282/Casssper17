export interface ISnackBar{
    message: string,
    type?: 'success' | 'error' | 'info', 
    horizontalPosition?: 'start' | 'end', 
    verticalPosition?: 'top' | 'bottom', 
    duration?: number 
  }
