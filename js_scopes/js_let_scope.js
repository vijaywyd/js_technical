function foo(bar) {
  if(bar) {
      /*let variables are not hoisted
      IF the is statement is 1000 lines long block and let variable declaed at 500th line , it can be accessed only from 501-1000
      */

      let baz = bar;

      if(baz) {
        let bam = baz;
      }
  }
}
