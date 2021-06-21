initSidebarItems({"fn":[["clone","Clones a dynamic [`Array`]."],["get_display",""],["new_empty_array","Creates a new [`Array`] with a [`Array::len`] of 0."],["new_null_array","Creates a new [`Array`] of [`DataType`] `data_type` and `length`. The array is guaranteed to have [`Array::null_count`] equal to [`Array::len`]."]],"mod":[["growable","Contains the trait [`Growable`] and corresponding concreate implementations, one per concrete array, that offer the ability to create a new [`Array`] out of slices of existing [`Array`]s."],["ord","Contains functions and function factories to order values within arrays."]],"struct":[["BinaryArray",""],["BooleanArray","A [`BooleanArray`] is arrow’s equivalent to `Vec<Option<bool>>`, i.e. an array designed for highly performant operations on optionally nullable booleans. The size of this struct is `O(1)` as all data is stored behind an `Arc`."],["DictionaryArray","An [`Array`] whose values are encoded by keys. This [`Array`] is useful when the cardinality of values is low compared to the length of the [`Array`]."],["FixedSizeBinaryArray",""],["FixedSizeListArray",""],["ListArray",""],["MutableBinaryArray","The mutable version of [`BinaryArray`]."],["MutableBooleanArray","The mutable version of [`BooleanArray`]. See [`MutableArray`] for more details."],["MutableDictionaryArray","A mutable, strong-typed version of [`DictionaryArray`]."],["MutableListArray","The mutable version of [`ListArray`]."],["MutablePrimitiveArray","The mutable version of [`PrimitiveArray`]. See [`MutableArray`] for more details."],["MutableUtf8Array","The mutable version of [`Utf8Array`]. See [`MutableArray`] for more details."],["NullArray","The concrete [`Array`] of [`DataType::Null`]."],["PrimitiveArray","A [`PrimitiveArray`] is arrow’s equivalent to `Vec<Option<T: NativeType>>`, i.e. an array designed for highly performant operations on optionally nullable slots, backed by a physical type of a physical byte-width, such as `i32` or `f64`. The size of this struct is `O(1)` as all data is stored behind an [`std::sync::Arc`]."],["StructArray",""],["Utf8Array","A [`Utf8Array`] is arrow’s equivalent of `Vec<Option<String>>`, i.e. an array designed for highly performant operations on optionally nullable strings. The size of this struct is `O(1)` as all data is stored behind an `Arc`."]],"trait":[["Array","A trait representing an Arrow array. Arrow arrays are trait objects that are infalibly downcasted to concrete types according to the `Array::data_type`."],["DictionaryKey","Trait denoting [`NativeType`]s that can be used as keys of a dictionary."],["FromFfi","Trait describing how a struct imports into itself from the C data interface (FFI)."],["GenericBinaryArray","Trait that [`BinaryArray`] and [`Utf8Array`] implement for the purposes of DRY."],["Index","Trait describing any type that can be used to index a slot of an array."],["IterableListArray","Trait that list arrays implement for the purposes of DRY."],["MutableArray","A trait describing a mutable array; i.e. an array whose values can change. Mutable arrays are not `Send + Sync` and cannot be cloned but can be mutated in place, thereby making them useful to perform numeric operations without allocations. As in [`Array`], concrete arrays (such as `MutablePrimitiveArray`) implement how they are mutated."],["Offset","Trait describing types that can be used as offsets as per Arrow specification. This trait is only implemented for `i32` and `i64`, the two sizes part of the specification."],["ToFfi","Trait describing how a struct presents itself to the C data interface (FFI)."],["TryExtend","A trait describing the ability of a struct to create itself from a iterator. This is similar to [`Extend`], but accepted the creation to error."]],"type":[["ArrayRef",""],["DaysMsArray","A type definition [`PrimitiveArray`] for [`days_ms`]"],["DaysMsVec","A type definition [`MutablePrimitiveArray`] for [`days_ms`]"],["Float32Array","A type definition [`PrimitiveArray`] for `f32`"],["Float32Vec","A type definition [`MutablePrimitiveArray`] for `f32`"],["Float64Array","A type definition [`PrimitiveArray`] for `f64`"],["Float64Vec","A type definition [`MutablePrimitiveArray`] for `f64`"],["Int128Array","A type definition [`PrimitiveArray`] for `i128`"],["Int128Vec","A type definition [`MutablePrimitiveArray`] for `i128`"],["Int16Array","A type definition [`PrimitiveArray`] for `i16`"],["Int16Vec","A type definition [`MutablePrimitiveArray`] for `i16`"],["Int32Array","A type definition [`PrimitiveArray`] for `i32`"],["Int32Vec","A type definition [`MutablePrimitiveArray`] for `i32`"],["Int64Array","A type definition [`PrimitiveArray`] for `i64`"],["Int64Vec","A type definition [`MutablePrimitiveArray`] for `i64`"],["Int8Array","A type definition [`PrimitiveArray`] for `i8`"],["Int8Vec","A type definition [`MutablePrimitiveArray`] for `i8`"],["UInt16Array","A type definition [`PrimitiveArray`] for `u16`"],["UInt16Vec","A type definition [`MutablePrimitiveArray`] for `u16`"],["UInt32Array","A type definition [`PrimitiveArray`] for `u32`"],["UInt32Vec","A type definition [`MutablePrimitiveArray`] for `u32`"],["UInt64Array","A type definition [`PrimitiveArray`] for `u64`"],["UInt64Vec","A type definition [`MutablePrimitiveArray`] for `u64`"],["UInt8Array","A type definition [`PrimitiveArray`] for `u8`"],["UInt8Vec","A type definition [`MutablePrimitiveArray`] for `u8`"]]});