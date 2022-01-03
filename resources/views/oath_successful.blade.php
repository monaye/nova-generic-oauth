@extends('layouts.minimal')

@section('content')
    <p>
        {{ $slug }}との認証を完了しました。タブを閉じて元の画面に戻ってください。
    </p>
    <div class="flex align-center justify-center mt-20">
        <a class="bg-gray-800 text-white rounded-md px-4 py-2 mr-4 no-underline" href="{{ route('dashboard') }}">ホームに戻る</a>

    </div>
@endsection
