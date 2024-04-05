(function() {var type_impls = {
"sui_storage":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-OwnedRwLockReadGuard%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-OwnedRwLockReadGuard%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; OwnedRwLockReadGuard&lt;T, U&gt;<div class=\"where\">where\n    T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    U: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.map\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">map</a>&lt;F, V&gt;(\n    this: OwnedRwLockReadGuard&lt;T, U&gt;,\n    f: F\n) -&gt; OwnedRwLockReadGuard&lt;T, V&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;U</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;V</a>,\n    V: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class=\"docblock\"><p>Makes a new <code>OwnedRwLockReadGuard</code> for a component of the locked data.\nThis operation cannot fail as the <code>OwnedRwLockReadGuard</code> passed in\nalready locked the data.</p>\n<p>This is an associated function that needs to be\nused as <code>OwnedRwLockReadGuard::map(...)</code>. A method would interfere with\nmethods of the same name on the contents of the locked data.</p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::sync::Arc;\n<span class=\"kw\">use </span>tokio::sync::{RwLock, OwnedRwLockReadGuard};\n\n<span class=\"attr\">#[derive(Debug, Clone, Copy, PartialEq, Eq)]\n</span><span class=\"kw\">struct </span>Foo(u32);\n\n<span class=\"kw\">let </span>lock = Arc::new(RwLock::new(Foo(<span class=\"number\">1</span>)));\n\n<span class=\"kw\">let </span>guard = lock.read_owned().<span class=\"kw\">await</span>;\n<span class=\"kw\">let </span>guard = OwnedRwLockReadGuard::map(guard, |f| <span class=\"kw-2\">&amp;</span>f.<span class=\"number\">0</span>);\n\n<span class=\"macro\">assert_eq!</span>(<span class=\"number\">1</span>, <span class=\"kw-2\">*</span>guard);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_map\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">try_map</a>&lt;F, V&gt;(\n    this: OwnedRwLockReadGuard&lt;T, U&gt;,\n    f: F\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;OwnedRwLockReadGuard&lt;T, V&gt;, OwnedRwLockReadGuard&lt;T, U&gt;&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;U</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;V</a>&gt;,\n    V: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class=\"docblock\"><p>Attempts to make a new [<code>OwnedRwLockReadGuard</code>] for a component of the\nlocked data. The original guard is returned if the closure returns\n<code>None</code>.</p>\n<p>This operation cannot fail as the <code>OwnedRwLockReadGuard</code> passed in\nalready locked the data.</p>\n<p>This is an associated function that needs to be used as\n<code>OwnedRwLockReadGuard::try_map(..)</code>. A method would interfere with\nmethods of the same name on the contents of the locked data.</p>\n<h5 id=\"examples-1\"><a class=\"doc-anchor\" href=\"#examples-1\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::sync::Arc;\n<span class=\"kw\">use </span>tokio::sync::{RwLock, OwnedRwLockReadGuard};\n\n<span class=\"attr\">#[derive(Debug, Clone, Copy, PartialEq, Eq)]\n</span><span class=\"kw\">struct </span>Foo(u32);\n\n<span class=\"kw\">let </span>lock = Arc::new(RwLock::new(Foo(<span class=\"number\">1</span>)));\n\n<span class=\"kw\">let </span>guard = lock.read_owned().<span class=\"kw\">await</span>;\n<span class=\"kw\">let </span>guard = OwnedRwLockReadGuard::try_map(guard, |f| <span class=\"prelude-val\">Some</span>(<span class=\"kw-2\">&amp;</span>f.<span class=\"number\">0</span>)).expect(<span class=\"string\">\"should not fail\"</span>);\n\n<span class=\"macro\">assert_eq!</span>(<span class=\"number\">1</span>, <span class=\"kw-2\">*</span>guard);</code></pre></div>\n</div></details></div></details>",0,"sui_storage::mutex_table::RwLockGuard"],["<section id=\"impl-Send-for-OwnedRwLockReadGuard%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-Send-for-OwnedRwLockReadGuard%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for OwnedRwLockReadGuard&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    U: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section>","Send","sui_storage::mutex_table::RwLockGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-OwnedRwLockReadGuard%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-Debug-for-OwnedRwLockReadGuard%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for OwnedRwLockReadGuard&lt;T, U&gt;<div class=\"where\">where\n    U: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","sui_storage::mutex_table::RwLockGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-OwnedRwLockReadGuard%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-Drop-for-OwnedRwLockReadGuard%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for OwnedRwLockReadGuard&lt;T, U&gt;<div class=\"where\">where\n    T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    U: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.77.1/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","sui_storage::mutex_table::RwLockGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-OwnedRwLockReadGuard%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-Display-for-OwnedRwLockReadGuard%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for OwnedRwLockReadGuard&lt;T, U&gt;<div class=\"where\">where\n    U: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","sui_storage::mutex_table::RwLockGuard"],["<section id=\"impl-Sync-for-OwnedRwLockReadGuard%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-Sync-for-OwnedRwLockReadGuard%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for OwnedRwLockReadGuard&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    U: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section>","Sync","sui_storage::mutex_table::RwLockGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-OwnedRwLockReadGuard%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-Deref-for-OwnedRwLockReadGuard%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for OwnedRwLockReadGuard&lt;T, U&gt;<div class=\"where\">where\n    T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    U: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.77.1/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = U</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;U</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","sui_storage::mutex_table::RwLockGuard"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()