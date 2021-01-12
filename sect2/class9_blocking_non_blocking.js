// blocking = sync
// non-blocking = async (if done well)

// blocking blocks exection of the rest of the code until a statement completes its execution.

// blocking is an idea invented to make writing software easier, but it is not really how a computer works.

// hardware is async. The programming language is the one that makes the program execution blocking and sync

// async code allows us to unlock the js engine and thus allow to execute other processes while waiting other processes to return
// the different results of their operations. 

// when an application is blocked, the cpu executes a context switch (which is saving the locked program into disk)
// we need to try to avoid to be context switch. As when we are context switched, the cpu starts running other applications while our application is blocked.